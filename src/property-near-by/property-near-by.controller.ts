import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PropertyNearByService } from './property-near-by.service';
import { CreatePropertyNearByDto } from './dto/create-property-near-by.dto';
import { UpdatePropertyNearByDto } from './dto/update-property-near-by.dto';

@Controller('property-near-by')
export class PropertyNearByController {
  constructor(private readonly propertyNearByService: PropertyNearByService) {}

  @Post()
  create(@Body() createPropertyNearByDto: CreatePropertyNearByDto) {
    return this.propertyNearByService.create(createPropertyNearByDto);
  }

  @Get()
  findAll() {
    return this.propertyNearByService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertyNearByService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyNearByDto: UpdatePropertyNearByDto) {
    return this.propertyNearByService.update(+id, updatePropertyNearByDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertyNearByService.remove(+id);
  }
}
