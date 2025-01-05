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
    return {
      massage: 'Category created successfully.',
      category: categorySave,
    };
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const existingCategory = await this.categoryRepository.findOne({
      where: { cat_name: updateCategoryDto.cat_name },
    });

    if (existingCategory) {
      throw new ConflictException('Category name already exists');
    }
    const category = await this.categoryRepository.findOne({ where: { id } });

    if (!category) {
      throw new ConflictException('Category not found');
    }
    Object.assign(category, updateCategoryDto);
    const categoryUpdate = await this.categoryRepository.save(category);
    return {
      massage: 'Category updated successfully.',
      category: categoryUpdate,
    };
  }

  async remove(id: number) {
    const categoryToDelete = this.categoryRepository.findOne({ where: { id } });
    if (!categoryToDelete) {
      throw new ConflictException('Category not found');
    }
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new ConflictException('Category deletion failed');
    }
    return {
      massage: 'Category deleted successfully.',
      category: categoryToDelete,
    };
  }
}
