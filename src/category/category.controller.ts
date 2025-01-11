import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new category' })
  async createtcategory(
    @Body() createCategoryDto: CreateCategoryDto,
    @Res() res: Response,
  ) {
    try {
      const createCategory =
        await this.categoryService.createtcategory(createCategoryDto);
      if (createCategory) {
        res.status(200).json({
          status: true,
          message: 'category created successfully.',
          data: createCategory,
        });
      } else {
        res.status(200).json({
          status: true,
          message: 'Somthing went wrong.',
          data: createCategory,
        });
      }
    } catch (error) {
      res.status(200).json({
        status: false,
        message: 'Somthing went wrong',
        data: {},
        error: error.response,
      });
    }
  }

  @Get('list')
  async findAll(@Res() res: Response) {
    try {
      const listCategory = await this.categoryService.findAll();
      if (listCategory.length > 0) {
        res.status(200).json({
          status: true,
          message: 'category fetched successfully.',
          data: listCategory,
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'Sorry category data not found',
          data: {},
        });
      }
    } catch (error) {
      res.status(200).json({
        status: false,
        message: error.response.message,
        data: {},
        error: error.response,
      });
    }
  }

  @Get('list/:id')
  @ApiOperation({ summary: 'Get a category by ID' })
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const listCategory = await this.categoryService.findOne(+id);
      if (listCategory) {
        res.status(200).json({
          status: true,
          message: 'category fetched successfully.',
          data: listCategory,
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'Sorry category data not found',
          data: {},
        });
      }
    } catch (error) {
      res.status(200).json({
        status: false,
        message: error.response.message,
        data: {},
        error: error.response,
      });
    }
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Res() res: Response,
  ) {
    try {
      const updatedLandmark = this.categoryService.update(
        +id,
        updateCategoryDto,
      );
      res.status(200).json({
        status: true,
        message: 'Categoey updated successfully.',
        data: updatedLandmark,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message || 'Something went wrong',
        data: {},
      });
    }
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Delete a category by ID' })
  @ApiResponse({ status: 200, description: 'OK' })
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const listCategory = await this.categoryService.remove(+id);
      if (listCategory.affected === 0) {
        res.status(200).json({
          status: true,
          message: 'category deteled successfully.',
          data: listCategory,
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'Category not deleted',
          data: {},
          error: '',
        });
      }
    } catch (error) {
      res.status(200).json({
        status: false,
        message: error.response.message,
        data: {},
        error: error.response,
      });
    }
  }
}
