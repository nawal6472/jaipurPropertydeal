import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Body,
  Res,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { diskStorage } from 'multer';
import { MoreImgService } from './more_img.service';
import { CreateMoreImgDto } from './dto/create-more_img.dto';
import { Response } from 'express';
import { HttpStatus } from '@nestjs/common';

@Controller('more-img')
export class MoreImgController {
  constructor(private readonly moreImgService: MoreImgService) {}

  @Post('upload-images')
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: './uploads/', // Directory for uploaded files
        filename: (req, file, callback) => {
          const fileExtension = path.extname(file.originalname);
          const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${fileExtension}`;
          callback(null, fileName);
        },
      }),
      limits: {
        fileSize: 10 * 1024 * 1024, // File size limit of 10 MB
      },
    }),
  )
  async uploadPropertyImages(
    @UploadedFiles() files: Express.Multer.File[], // Handle multiple files
    @Body() createMoreImgDto: CreateMoreImgDto, // Use DTO for validation
    @Res() res: Response, // Response handling with @Res()
  ) {
    // console.log(files); // Log the files to debug if they're being received
    try {
      const imageName = files.map((file) => file.filename);

      // Save the property with image names in the database
      const property = await this.moreImgService.createMoreImg({
        // name: createMoreImgDto.name,
        imageName,
      });

      // Success response
      return res.status(HttpStatus.OK).json({
        status: true,
        message: 'Property and images uploaded successfully',
        data: property,
      });
    } catch (error) {
      // Error handling
      console.error(error); // Log the error for debugging
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: false,
        message: 'Something went wrong',
        error: error.response || error.message,
      });
    }
  }
}
