import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAmenityDto {
  @IsOptional()
  @ApiProperty({ description: 'property_id' })
  property_id: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'amenity_name' })
  amenity_name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'amenity_image' })
  amenity_image: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'status' })
  status: boolean;
}
