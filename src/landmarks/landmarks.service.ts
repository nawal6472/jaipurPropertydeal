import { ConflictException, Injectable } from '@nestjs/common';
import { CreateLandmarkDto } from './dto/create-landmark.dto';
import { UpdateLandmarkDto } from './dto/update-landmark.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Landmark } from './entities/landmark.entity';

@Injectable()
export class LandmarksService {
  constructor(
    @InjectRepository(Landmark)
    private readonly landmarkRepository: Repository<Landmark>,
  ) {}
  async create(createLandmarkDto: CreateLandmarkDto) {
    const landmark = this.landmarkRepository.create(createLandmarkDto);
    const landmarkSave = await this.landmarkRepository.save(landmark);
    return {
      massage: 'Landmark created successfully.',
      landmark: landmarkSave,
    };
  }

  findAll() {
    return this.landmarkRepository.find();
  }

  findOne(id: number) {
    return this.landmarkRepository.findOne({ where: { id } });
  }

  async update(id: number, updateLandmarkDto: UpdateLandmarkDto) {
    const existingLandmark = await this.landmarkRepository.findOne({
      where: { id },
    });

    if (!existingLandmark) {
      throw new ConflictException('Landmark not found');
    }

    // Merge the update DTO into the existing entity
    const updatedLandmark = this.landmarkRepository.merge(
      existingLandmark,
      updateLandmarkDto,
    );

    // Save the updated landmark back to the database
    const landmarkSave = await this.landmarkRepository.save(updatedLandmark);

    return {
      message: 'Landmark updated successfully.',
      landmark: landmarkSave,
    };
  }

  async remove(id: number) {
    const landmarkToDelete = this.landmarkRepository.findOne({ where: { id } });
    if (!landmarkToDelete) {
      throw new ConflictException('Category not found');
    }
    const result = await this.landmarkRepository.delete(id);
    if (result.affected === 0) {
      throw new ConflictException('Category deletion failed');
    }
    return {
      massage: 'Category deleted successfully.',
      category: landmarkToDelete,
    };
  }
}
