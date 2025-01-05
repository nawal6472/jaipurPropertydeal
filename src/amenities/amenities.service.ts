import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAmenityDto } from './dto/create-amenity.dto';
import { UpdateAmenityDto } from './dto/update-amenity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Amenity } from './entities/amenity.entity';

@Injectable()
export class AmenitiesService {
  constructor(
    @InjectRepository(Amenity) private amenityRepository: Repository<Amenity>,
  ) {}
  async create(createAmenityDto: CreateAmenityDto) {
    const amenity = this.amenityRepository.create(createAmenityDto);
    const amenitySave = await this.amenityRepository.save(amenity);
    return {
      message: 'Amenity created successfully.',
      amenity: amenitySave,
    };
  }

  findAll() {
    return this.amenityRepository.find();
  }

  findOne(id: number) {
    return this.amenityRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAmenityDto: UpdateAmenityDto) {
    const existingAmenity = await this.amenityRepository.findOne({
      where: { id },
    });
    if (!existingAmenity) {
      throw new ConflictException('Landmark not found');
    }

    const updatedAmenity = this.amenityRepository.merge(
      existingAmenity,
      updateAmenityDto,
    );

    const AmenitySave = await this.amenityRepository.save(updatedAmenity);
    return {
      message: 'Amenity updated successfully.',
      landmark: AmenitySave,
    };
  }

  async remove(id: number) {
    const categoryToDelete = this.amenityRepository.findOne({ where: { id } });
    if (!categoryToDelete) {
      throw new ConflictException('amenity not found');
    }
    const result = await this.amenityRepository.delete(id);
    if (result.affected === 0) {
      throw new ConflictException('amenity deletion failed');
    }
    return {
      massage: 'amenity deleted successfully.',
      category: categoryToDelete,
    };
  }
}
