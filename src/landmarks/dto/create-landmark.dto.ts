import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLandmarkDto {
  @ApiProperty({ description: 'property_id' })
  @IsNotEmpty()
  property_id: number;

  @ApiProperty({ description: 'landmark_name' })
  @IsNotEmpty()
  landmark_name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'type_landmark' })
  type_landmark: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'many_landmark' })
  many_landmark: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'status' })
  status: boolean;
}
