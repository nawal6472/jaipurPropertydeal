import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PropertyNearByService } from './property-near-by.service';
import { CreatePropertyNearByDto } from './dto/create-property-near-by.dto';
import { UpdatePropertyNearByDto } from './dto/update-property-near-by.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('property-near-by')
@Controller('property-near-by')
export class PropertyNearByController {
  constructor(private readonly propertyNearByService: PropertyNearByService) {}

  @Post()
  @ApiOperation({ summary: 'Create property near by' })
  @ApiResponse({
    status: 200,
    description: 'PropertyNearBy created successfully.',
  })
  @ApiResponse({ status: 409, description: 'PropertyNearBy already exists.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  create(@Body() createPropertyNearByDto: CreatePropertyNearByDto) {
    return this.propertyNearByService.create(createPropertyNearByDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all property near by' })
  @ApiResponse({ status: 200, description: 'Return all property near by.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findAll() {
    return this.propertyNearByService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get property near by by id' })
  @ApiResponse({ status: 200, description: 'Return property near by by id.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  findOne(@Param('id') id: string) {
    return this.propertyNearByService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update property near by by id' })
  @ApiResponse({
    status: 200,
    description: 'PropertyNearBy updated successfully.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  update(
    @Param('id') id: string,
    @Body() updatePropertyNearByDto: UpdatePropertyNearByDto,
  ) {
    return this.propertyNearByService.update(+id, updatePropertyNearByDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete property near by by id' })
  @ApiResponse({
    status: 200,
    description: 'PropertyNearBy deleted successfully.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  remove(@Param('id') id: string) {
    return this.propertyNearByService.remove(+id);
  }
}
