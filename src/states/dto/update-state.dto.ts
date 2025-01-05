import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateStateDto } from './create-state.dto';
import { IsOptional } from 'class-validator';

export class UpdateStateDto {
  @IsOptional()
  @ApiProperty({ description: 'state_name' })
  state_name?: string;

  @IsOptional()
  @ApiProperty({ description: 'status' })
  status?: boolean;
}
