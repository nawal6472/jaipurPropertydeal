import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { PropertyBulkService } from './property-bulk.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as XLSX from 'xlsx';
import { Response } from 'express';

@Controller('property-bulk')
export class PropertyBulkController {
  constructor(private readonly propertyBulkService: PropertyBulkService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadExcel(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      if (!file) {
        return res.status(400).json({
          status: false,
          message: 'Data not found',
          data: {},
          error: 'File is missing',
        });
      }

      const workbook = XLSX.read(file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      const savedProperties =
        await this.propertyBulkService.saveProperties(data);

      return res.status(200).json({
        status: true,
        message: 'Property uploaded successfully!',
        data: savedProperties,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: 'Something went wrong while processing the file.',
        data: {},
        error: error.response || error.message,
      });
    }
  }
}
