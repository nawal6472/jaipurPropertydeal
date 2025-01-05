import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateStateDto {
  @IsNotEmpty()
  @ApiProperty({ description: 'state_name' })
  state_name: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'status' })
  @ApiProperty({ default: true })
  status: boolean;
}
