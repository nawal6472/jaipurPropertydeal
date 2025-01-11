import { IsOptional } from 'class-validator';

export class UpdatePropertyDto {
  @IsOptional()
  name: string;

  @IsOptional()
  locality: string;

  @IsOptional()
  full_address: string;

  @IsOptional()
  min_price: number;

  @IsOptional()
  max_price: number;

  @IsOptional()
  bhk: string;

  @IsOptional()
  num_washroom: string;

  @IsOptional()
  num_bathroom: string;

  @IsOptional()
  num_storge: string;

  @IsOptional()
  developer_name: string;

  @IsOptional()
  pro_facing: string;

  @IsOptional()
  pro_summary: string;

  @IsOptional()
  built_up_area: string;

  @IsOptional()
  carpet_area: string;

  @IsOptional()
  super_built_up_area: string;

  @IsOptional()
  total_floor: string;

  @IsOptional()
  road_width: string;

  @IsOptional()
  corner_plot: string;

  @IsOptional()
  floor_plan: string;

  @IsOptional()
  pro_brochures: string;

  @IsOptional()
  pro_video: string;

  @IsOptional()
  landmark_id: number;

  @IsOptional()
  category_id: number;

  @IsOptional()
  more_img_id: number;

  @IsOptional()
  property_near_by_id: number;

  @IsOptional()
  type_patta: boolean;

  @IsOptional()
  furnished: boolean;

  @IsOptional()
  slug: string;

  @IsOptional()
  status: boolean;
}
