import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateAmenityDto {
  @IsOptional()
  @ApiProperty({ description: 'property_id' })
  property_id?: number;

  @IsOptional()
  @ApiProperty({ description: 'amenity_name' })
  amenity_name?: string;

  @IsOptional()
  @ApiProperty({ description: 'amenity_image' })
  amenity_image?: string;

  @IsOptional()
  @ApiProperty({ description: 'status' })
  status?: boolean;
}
