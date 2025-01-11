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
import { LandmarksService } from './landmarks.service';
import { CreateLandmarkDto } from './dto/create-landmark.dto';
import { UpdateLandmarkDto } from './dto/update-landmark.dto';
import { Response } from 'express';

@Controller('landmarks')
export class LandmarksController {
  constructor(private readonly landmarksService: LandmarksService) {}

  @Post('create')
  async create(
    @Body() createLandmarkDto: CreateLandmarkDto,
    @Res() res: Response,
  ) {
    try {
      const createCategory =
        await this.landmarksService.createtlandmark(createLandmarkDto);
      if (createCategory) {
        res.status(200).json({
          status: true,
          message: 'landmark created successfully.',
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
      const listlandmark = await this.landmarksService.findAll();
      if (listlandmark.length > 0) {
        res.status(200).json({
          status: true,
          message: 'Landmark fetched successfully.',
          data: listlandmark,
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'Sorry Landmark data not found',
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
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const listlandmark = await this.landmarksService.findOne(+id);
      if (listlandmark) {
        res.status(200).json({
          status: true,
          message: 'Landmark fetched successfully.',
          data: listlandmark,
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'Sorry Landmark data not found',
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
    @Body() updateLandmarkDto: UpdateLandmarkDto,
    @Res() res: Response,
  ) {
    try {
      const updatedLandmark = await this.landmarksService.update(
        +id,
        updateLandmarkDto,
      );
      res.status(200).json({
        status: true,
        message: 'Landmark updated successfully.',
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
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const listlandmark = await this.landmarksService.remove(+id);
      if (listlandmark.affected === 0) {
        res.status(200).json({
          status: true,
          message: 'Landmark deteled successfully.',
          data: listlandmark,
          error: '',
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'Landmaek not deleted',
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
