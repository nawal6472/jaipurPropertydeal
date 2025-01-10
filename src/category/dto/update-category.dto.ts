import { IsOptional } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  property_id?: number;

  @IsOptional()
  cat_name?: string;

  @IsOptional()
  status?: boolean;
}
