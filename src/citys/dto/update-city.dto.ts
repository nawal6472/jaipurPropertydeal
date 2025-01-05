import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCityDto } from './create-city.dto';
import { IsOptional } from 'class-validator';

export class UpdateCityDto {
  @IsOptional()
  @ApiProperty({ description: 'city_name' })
  city_name?: string;

  @IsOptional()
  @ApiProperty({ description: 'status' })
  status?: boolean;
}
