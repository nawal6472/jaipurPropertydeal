import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CitysService } from './citys.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('citys')
@Controller('citys')
export class CitysController {
  constructor(private readonly citysService: CitysService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new city' })
  @ApiResponse({
    status: 201,
    description: 'The city has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createCityDto: CreateCityDto) {
    return this.citysService.create(createCityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all citys' })
  @ApiResponse({ status: 200, description: 'List of citys' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  findAll() {
    return this.citysService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a city by ID' })
  @ApiResponse({ status: 200, description: 'City found' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  findOne(@Param('id') id: string) {
    return this.citysService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a city by ID' })
  @ApiResponse({ status: 200, description: 'City updated' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.citysService.update(+id, updateCityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a city by ID' })
  @ApiResponse({ status: 200, description: 'City deleted' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  remove(@Param('id') id: string) {
    return this.citysService.remove(+id);
  }
}
