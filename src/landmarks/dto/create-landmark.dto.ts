import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLandmarkDto {
  @IsNotEmpty()
  landmark_name: string;

  @IsNotEmpty()
  type_landmark: string;

  @IsNotEmpty()
  many_landmark: string;

  @IsNotEmpty()
  status: boolean;
}
