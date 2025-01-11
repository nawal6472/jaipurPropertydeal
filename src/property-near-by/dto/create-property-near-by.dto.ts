import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePropertyNearByDto {
  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  title: string;

  @IsNotEmpty()
  @IsString({ message: 'name must be a text' })
  name: string;

  @IsNotEmpty()
  status: boolean;
}
