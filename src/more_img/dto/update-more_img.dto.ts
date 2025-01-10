import { PartialType } from '@nestjs/swagger';
import { CreateMoreImgDto } from './create-more_img.dto';

export class UpdateMoreImgDto extends PartialType(CreateMoreImgDto) {}
