import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MAX,
  MaxLength,
} from 'class-validator';

export class CreatePropertyDto {
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  @MaxLength(100, { message: 'name must be less than 100 characters' })
  name: string;

  @IsNotEmpty()
  @IsString({ message: 'locality must be a text' })
  @MaxLength(500, { message: 'locality must be less than 500 characters' })
  locality: string;

  @IsNotEmpty()
  @IsString({ message: 'full_address must be a text' })
  @MaxLength(500, { message: 'full_address must be less than 500 characters' })
  full_address: string;

  @IsNotEmpty()
  min_price: number;

  @IsNotEmpty()
  max_price: number;

  @IsNotEmpty()
  bhk: string;

  @IsNotEmpty()
  num_washroom: string;

  @IsNotEmpty()
  num_bathroom: string;

  @IsNotEmpty()
  num_storge: string;

  @IsOptional()
  @MaxLength(100, {
    message: 'developer_name must be less than 100 characters',
  })
  developer_name: string;

  @IsNotEmpty()
  pro_facing: string;

  @IsNotEmpty()
  @MaxLength(500, { message: 'pro_summary must be less than 500 characters' })
  pro_summary: string;

  @IsNotEmpty()
  built_up_area: string;

  @IsNotEmpty()
  carpet_area: string;

  @IsNotEmpty()
  super_built_up_area: string;

  @IsNotEmpty()
  total_floor: string;

  @IsNotEmpty()
  road_width: string;

  @IsNotEmpty()
  corner_plot: string;

  @IsNotEmpty()
  floor_plan: string;

  @IsOptional()
  pro_brochures: string;

  @IsOptional()
  pro_video: string;

  @IsNotEmpty()
  landmark_id: number;

  @IsNotEmpty()
  category_id: number;

  @IsNotEmpty()
  more_img_id: number;

  @IsNotEmpty()
  property_near_by_id: number;

  @IsNotEmpty()
  type_patta: boolean;

  @IsNotEmpty()
  furnished: boolean;

  @IsOptional()
  @IsString()
  slug: string;

  @IsNotEmpty()
  status: boolean;
}
