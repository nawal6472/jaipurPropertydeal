import { IsOptional } from 'class-validator';

export class UpdatePropertyNearByDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  status?: boolean;
}
