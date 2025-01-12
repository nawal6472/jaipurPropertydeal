import { IsString } from 'class-validator';

export class CreateMoreImgDto {
  @IsString()
  name: string;

  @IsString({ each: true })
  imageName: string[];
}
