import { Injectable } from '@nestjs/common';
import { CreateMoreImgDto } from './dto/create-more_img.dto';
import { UpdateMoreImgDto } from './dto/update-more_img.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MoreImgService {
  getStorageOptions() {
    return diskStorage({
      destination: './uploads',
      filename: (req, file, callback) => {
        const uniqueSuffix = `${uuid()}${extname(file.originalname)}`;
        callback(null, uniqueSuffix);
      },
    });
  }

  findAll() {
    return `This action returns all moreImg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moreImg`;
  }

  update(id: number, updateMoreImgDto: UpdateMoreImgDto) {
    return `This action updates a #${id} moreImg`;
  }

  remove(id: number) {
    return `This action removes a #${id} moreImg`;
  }
}
