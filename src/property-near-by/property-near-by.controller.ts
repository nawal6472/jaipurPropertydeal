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
import { PropertyNearByService } from './property-near-by.service';
import { CreatePropertyNearByDto } from './dto/create-property-near-by.dto';
import { UpdatePropertyNearByDto } from './dto/update-property-near-by.dto';
import { Response } from 'express';

@Controller('property-near-by')
export class PropertyNearByController {
  constructor(private readonly propertyNearByService: PropertyNearByService) {}

  @Post('create')
  async create(
    @Body() createPropertyNearByDto: CreatePropertyNearByDto,
    @Res() res: Response,
  ) {
    try {
      const createneraBy = await this.propertyNearByService.create(
        createPropertyNearByDto,
      );
      if (createneraBy) {
        res.status(200).json({
          status: true,
          message: 'PropertyNearBy created successfully.',
          data: createneraBy,
        });
      } else {
        res.status(200).json({
          status: true,
          message: 'Somthing went wrong.',
          data: createneraBy,
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
      const listnearBy = await this.propertyNearByService.findAll();
      if (listnearBy.length > 0) {
        res.status(200).json({
          status: true,
          message: 'PropertyNearBy fetched successfully.',
          data: listnearBy,
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'Sorry PropertyNearBy data not found',
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
    return this.propertyNearByService.findAll();
  }

  @Get('list/:id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    try {
      const listnearBy = await this.propertyNearByService.findOne(+id);
      if (listnearBy) {
        res.status(200).json({
          status: true,
          message: 'PropertyNearBy fetched successfully.',
          data: listnearBy,
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'Sorry PropertyNearBy data not found',
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
    return;
  }

  @Patch('update/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePropertyNearByDto: UpdatePropertyNearByDto,
    @Res() res: Response,
  ) {
    try {
      const updatednearBy = await this.propertyNearByService.update(
        +id,
        updatePropertyNearByDto,
      );
      res.status(200).json({
        status: true,
        message: 'PropertyNearBy updated successfully.',
        data: updatednearBy,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error.message || 'Something went wrong',
        data: {},
      });
    }
    return;
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const listnearBy = await this.propertyNearByService.remove(+id);
      if (listnearBy.affected === 1) {
        res.status(200).json({
          status: true,
          message: 'PropertyNearBy deteled successfully.',
          data: listnearBy,
          error: '',
        });
      } else {
        res.status(200).json({
          status: false,
          message: 'propertyNearBy not deleted',
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
