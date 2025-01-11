import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategoryDto {
  @IsNotEmpty({ message: 'category name is required' })
  @IsString({ message: 'category name must be a text' })
  cat_name: string;

  @IsNotEmpty({ message: 'status is required' })
  status: boolean;
}
