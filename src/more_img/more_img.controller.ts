import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { MoreImgService } from './more_img.service';
import { UpdateMoreImgDto } from './dto/update-more_img.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('more-img')
export class MoreImgController {
  constructor(private readonly moreImgService: MoreImgService) {}

  @Post('image')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: new MoreImgService().getStorageOptions(),
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  )
  async uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    return {
      message: 'Files uploaded successfully',
      files: files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
      })),
    };
  }

  @Get()
  findAll() {
    return this.moreImgService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moreImgService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoreImgDto: UpdateMoreImgDto) {
    return this.moreImgService.update(+id, updateMoreImgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moreImgService.remove(+id);
  }
}
