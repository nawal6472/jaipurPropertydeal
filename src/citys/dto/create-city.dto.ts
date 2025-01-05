import { IsNotEmpty } from 'class-validator';

export class CreateCityDto {
  @IsNotEmpty()
  city_name: string;

  @IsNotEmpty()
  status: boolean;
}
