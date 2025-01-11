import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategoryDto {
  @ApiProperty({ description: 'property_id' })
  @IsNotEmpty()
  property_id: number;

  @ApiProperty({ description: 'cat_name' })
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  cat_name: string;

  @ApiProperty({ description: 'status' })
  @IsNotEmpty()
  status: boolean;
}
