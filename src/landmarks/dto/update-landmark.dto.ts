import { IsOptional } from 'class-validator';

export class UpdateLandmarkDto {
  @IsOptional()
  landmark_name?: string;

  @IsOptional()
  type_landmark?: string;

  @IsOptional()
  many_landmark?: string;

  @IsOptional()
  status?: boolean;
}
