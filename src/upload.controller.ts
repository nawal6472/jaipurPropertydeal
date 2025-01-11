// import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import * as path from 'path';
// import { diskStorage } from 'multer';

// @Controller('upload')
// export class UploadController {

//   @Post('image')
//   @UseInterceptors(
//     FileInterceptor('file', {
//       storage: diskStorage({
//         destination: './uploads', // The directory where the file will be saved
//         filename: (req, file, callback) => {
//           const fileExtension = path.extname(file.originalname); // Get file extension
//           const fileName = `${Date.now()}${fileExtension}`; // Generate a unique name
//           callback(null, fileName);
//         },
//       }),
//       limits: {
//         fileSize: 5 * 1024 * 1024, // 5 MB file size limit
//       },
//     }),
//   )
//   uploadImage(@UploadedFile() file) {
//     console.log(file);
//     return {
//       message: 'File uploaded successfully',
//       file: file,
//     };
//   }
// }








