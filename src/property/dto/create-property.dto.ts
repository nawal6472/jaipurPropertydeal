import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MAX,
  MaxLength,
} from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty({ description: 'name' })
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  @MaxLength(100, { message: 'name must be less than 100 characters' })
  name: string;

  @ApiProperty({ description: 'locality' })
  @IsNotEmpty()
  @IsString({ message: 'locality must be a text' })
  @MaxLength(500, { message: 'locality must be less than 500 characters' })
  locality: string;

  @ApiProperty({ description: 'full_address' })
  @IsNotEmpty()
  @IsString({ message: 'full_address must be a text' })
  @MaxLength(500, { message: 'full_address must be less than 500 characters' })
  full_address: string;

  @ApiProperty({ description: 'price' })
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: 'bhk' })
  @IsNotEmpty()
  bhk: string;

  @ApiProperty({ description: 'num_washroom' })
  @IsNotEmpty()
  num_washroom: string;

  @ApiProperty({ description: 'num_bathroom' })
  @IsNotEmpty()
  num_bathroom: string;

  @ApiProperty({ description: 'num_storge' })
  @IsNotEmpty()
  num_storge: string;

  @ApiProperty({ description: 'developer_name' })
  @IsOptional()
  @MaxLength(100, {
    message: 'developer_name must be less than 100 characters',
  })
  developer_name: string;

  @ApiProperty({ description: 'pro_facing' })
  @IsNotEmpty()
  pro_facing: string;

  @ApiProperty({ description: 'pro_summary' })
  @IsNotEmpty()
  @MaxLength(500, { message: 'pro_summary must be less than 500 characters' })
  pro_summary: string;

  @ApiProperty({ description: 'built_up_area' })
  @IsNotEmpty()
  built_up_area: string;

  @ApiProperty({ description: 'carpet_area' })
  @IsNotEmpty()
  carpet_area: string;

  @ApiProperty({ description: 'super_built_up_area' })
  @IsNotEmpty()
  super_built_up_area: string;

  @ApiProperty({ description: 'total_floor' })
  @IsNotEmpty()
  total_floor: string;

  @ApiProperty({ description: 'road_width' })
  @IsNotEmpty()
  road_width: string;

  @ApiProperty({ description: 'corner_plot' })
  @IsNotEmpty()
  corner_plot: string;

  @ApiProperty({ description: 'floor_plan' })
  @IsNotEmpty()
  floor_plan: string;

  @ApiProperty({ description: 'pro_brochures' })
  @IsOptional()
  pro_brochures: string;

  @ApiProperty({ description: 'pro_video' })
  @IsOptional()
  pro_video: string;

  @ApiProperty({ description: 'pro_images' })
  @IsNotEmpty()
  landmark_id: number;

  @ApiProperty({ description: 'pro_images' })
  @IsNotEmpty()
  category_id: number;

  @ApiProperty({ description: 'pro_images' })
  @IsNotEmpty()
  more_img_id: number;

  @ApiProperty({ description: 'pro_images' })
  @IsNotEmpty()
  property_near_by_id: number;

  @ApiProperty({ description: 'pro_images' })
  @IsNotEmpty()
  type_patta: boolean;

  @ApiProperty({ description: 'pro_images' })
  @IsNotEmpty()
  furnished: boolean;

  @ApiProperty({ description: 'pro_images' })
  @IsOptional()
  @IsString()
  slug: string;

  @ApiProperty({ description: 'status' })
  @IsNotEmpty()
  status: boolean;
}
