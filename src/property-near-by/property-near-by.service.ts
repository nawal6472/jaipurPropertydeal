import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePropertyNearByDto } from './dto/create-property-near-by.dto';
import { UpdatePropertyNearByDto } from './dto/update-property-near-by.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PropertyNearBy } from './entities/property-near-by.entity';

@Injectable()
export class PropertyNearByService {
  constructor(
    @InjectRepository(PropertyNearBy)
    private readonly propertyNearByRepository: Repository<PropertyNearBy>,
  ) {}
  async create(createPropertyNearByDto: CreatePropertyNearByDto) {
    const propertyNearBy = this.propertyNearByRepository.create(
      createPropertyNearByDto,
    );
    const propertyNearBySave =
      await this.propertyNearByRepository.save(propertyNearBy);
    return {
      massage: 'PropertyNearBy created successfully.',
      propertyNearBy: propertyNearBySave,
    };
  }

  findAll() {
    return this.propertyNearByRepository.find();
  }

  findOne(id: number) {
    return this.propertyNearByRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePropertyNearByDto: UpdatePropertyNearByDto) {
    const existingNeraby = await this.propertyNearByRepository.findOne({
      where: { id },
    });

    if (!existingNeraby) {
      throw new ConflictException('loctions near not found');
    }

    // Merge the update DTO into the existing entity
    const updatedpronear = this.propertyNearByRepository.merge(
      existingNeraby,
      updatePropertyNearByDto,
    );

    // Save the updated landmark back to the database
    const nearBySave = await this.propertyNearByRepository.save(updatedpronear);

    return {
      message: 'loctions near updated successfully.',
      landmark: nearBySave,
    };
  }

  async remove(id: number) {
    const propertyNearByToDelete = this.propertyNearByRepository.findOne({
      where: { id },
    });
    if (!propertyNearByToDelete) {
      throw new ConflictException('PropertyNearBy not found');
    }
    const result = await this.propertyNearByRepository.delete(id);
    if (result.affected === 0) {
      throw new ConflictException('PropertyNearBy deletion failed');
    }
    return {
      massage: 'PropertyNearBy deleted successfully.',
      propertyNearBy: propertyNearByToDelete,
    };
  }
}
