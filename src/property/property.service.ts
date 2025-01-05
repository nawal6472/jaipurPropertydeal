import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { slugifyHelper } from 'src/slugify/slugify.helper';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { Repository } from 'typeorm';
import * as slugify from 'slugify';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
  ) {}

  async create(createPropertyDto: CreatePropertyDto) {
    const { name, slug } = createPropertyDto;
    const finalSlug = slug || slugifyHelper(name);

    // console.log('Generated Slug:', finalSlug);

    const property = this.propertyRepository.create({
      ...createPropertyDto,
      slug: finalSlug,
    });

    const propertySave = await this.propertyRepository.save(property);

    return {
      message: 'Property created successfully.',
      landmark: propertySave,
      name,
      slug: finalSlug,
    };
  }
  findAll() {
    return this.propertyRepository.find();
  }

  findOne(id: number) {
    return this.propertyRepository.findOne({ where: { id } });
  }

  async update(id: number, UpdatePropertyDto: UpdatePropertyDto) {
    const existingproperty = await this.propertyRepository.findOne({
      where: { id },
    });

    if (!existingproperty) {
      throw new ConflictException('Landmark not found');
    }

    // Merge the update DTO into the existing entity
    const updatedProperty = this.propertyRepository.merge(
      existingproperty,
      UpdatePropertyDto,
    );

    // Save the updated landmark back to the database
    const propertySave = await this.propertyRepository.save(updatedProperty);

    return {
      message: 'property updated successfully.',
      property: propertySave,
    };
  }

  async remove(id: number) {
    const propertyToDelete = this.propertyRepository.findOne({
      where: { id },
    });
    if (!propertyToDelete) {
      throw new ConflictException('Property not found');
    }
    const result = await this.propertyRepository.delete(id);
    if (result.affected === 0) {
      throw new ConflictException('Property deletion failed');
    }
    return {
      massage: 'Property deleted successfully.',
      propertyNearBy: propertyToDelete,
    };
  }
}
