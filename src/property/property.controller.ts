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
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Response } from 'express';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
 async createProperty(@Body() createPropertyDto: CreatePropertyDto,@Res() res: Response) {
    try{
      
      const createProperty=await this.propertyService.create(createPropertyDto)
      if(createProperty){
        res.status(200).json({
          status:true,
          message:"Property created successfully.",
          data:createProperty
         })
      }
      else{
        res.status(200).json({
          status:false,
          message:"Somthing went wrong",
          data:{},
          error:""
         })
      }
      
    }catch(error){
      res.status(200).json({
        status:false,
        message:error.response.message,
        data:{},
        error:error.response
       })
    }
  }

  @Get()
 async findAll(@Res() res: Response) {
    try{
      const listProperty=await this.propertyService.findAll();
      if(listProperty.length>0){
        res.status(200).json({
          status:true,
          message:"category fetched successfully.",
          data:listProperty
         })
      }else{
        res.status(200).json({
          status:false,
          message:"Sorry category data not found",
          data:{}
         })
      }
      
    }catch(error){
      res.status(200).json({
        status:false,
        message:error.response.message,
        data:{},
        error:error.response
       })
    }
    
  }

  @Get(':id')
 async findOne(@Param('id') id: string,@Res() res: Response) {
    try{
      
      const findProperty=await this.propertyService.findOne(+id);
      if(findProperty){
        res.status(200).json({
          status:true,
          message:"category fetched successfully.",
          data:findProperty
         })
      }else{
        res.status(200).json({
          status:false,
          message:"Sorry category data not found",
          data:{}
         })
      }
      
    }catch(error){
      res.status(200).json({
        status:false,
        message:error.response.message,
        data:{},
        error:error.response
       })
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
    @Res() res: Response
  ) {
    return this.propertyService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string,@Res() res: Response) {
    try{
      
      const deleteProperty=await this.propertyService.remove(+id);
      if(deleteProperty.affected === 0){
        res.status(200).json({
          status:true,
          message:"category deteled successfully.",
          data:deleteProperty
         })
      }else{
        res.status(200).json({
          status:false,
          message:"Category not deleted",
          data:{},
          error:""
         })
      }
      
    }catch(error){
      res.status(200).json({
        status:false,
        message:error.response.message,
        data:{},
        error:error.response
       })
    }
    
  }
}
