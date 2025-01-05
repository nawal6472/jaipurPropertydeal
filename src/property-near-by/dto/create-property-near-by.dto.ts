import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePropertyNearByDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'property_id' })
  property_id: number;

  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  @ApiProperty({ description: 'name' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'status' })
  status: boolean;
}
