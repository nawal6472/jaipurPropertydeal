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
  async createtlandmark(createLandmarkDto: CreateLandmarkDto) {
    const landmark = this.landmarkRepository.create(createLandmarkDto);
    const landmarkSave = await this.landmarkRepository.save(landmark);
    return landmarkSave;
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
    return await this.landmarkRepository.delete(id);
  }
}
