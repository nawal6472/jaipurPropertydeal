import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async createtcategory(createCategoryDto: CreateCategoryDto) {
    const existingCategory = await this.categoryRepository.findOne({
      where: { cat_name: createCategoryDto.cat_name }, // Assuming 'name' is the unique attribute
    });

    if (existingCategory) {
      throw new ConflictException('Category name already exists');
    }
    const category = this.categoryRepository.create(createCategoryDto);
    const categorySave = await this.categoryRepository.save(category);
    return categorySave
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
   return  await this.categoryRepository.findOne({
      where: { cat_name: updateCategoryDto.cat_name },
    })

  }

  async remove(id: number) {
    return await this.categoryRepository.delete(id);
  }
}
