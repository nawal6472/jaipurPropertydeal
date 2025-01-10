import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePropertyNearByDto {
  @IsNotEmpty()
  property_id: number;

  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  name: string;

  @IsNotEmpty()
  status: boolean;
}
