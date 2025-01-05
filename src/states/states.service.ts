import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './entities/state.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}
  async create(CreateStateDto: CreateStateDto) {
    const existingState = await this.stateRepository.findOne({
      where: { state_name: CreateStateDto.state_name }, // Assuming 'name' is the unique attribute
    });

    if (existingState) {
      throw new ConflictException('Category name already exists');
    }
    const state = this.stateRepository.create(CreateStateDto);
    const stateSave = await this.stateRepository.save(state);
    return {
      massage: 'Category created successfully.',
      state: stateSave,
    };
  }

  findAll() {
    return this.stateRepository.find();
  }

  findOne(id: number) {
    return this.stateRepository.findOne({ where: { id } });
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return `This action updates a #${id} state`;
  }

  async remove(id: number) {
    const categoryToDelete = this.stateRepository.findOne({ where: { id } });
    if (!categoryToDelete) {
      throw new ConflictException('State not found');
    }
    const result = await this.stateRepository.delete(id);
    if (result.affected === 0) {
      throw new ConflictException('State deletion failed');
    }
    return {
      massage: 'State deleted successfully.',
      category: categoryToDelete,
    };
  }
}
