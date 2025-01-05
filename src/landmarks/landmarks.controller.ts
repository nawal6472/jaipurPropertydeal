import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LandmarksService } from './landmarks.service';
import { CreateLandmarkDto } from './dto/create-landmark.dto';
import { UpdateLandmarkDto } from './dto/update-landmark.dto';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Landmarks')
@Controller('landmarks')
export class LandmarksController {
  constructor(private readonly landmarksService: LandmarksService) {}

  @Post('create')
  @ApiOperation({ summary: 'Landmark created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @ApiResponse({ status: 201, description: 'Landmark created successfully.' })
  create(@Body() createLandmarkDto: CreateLandmarkDto) {
    return this.landmarksService.create(createLandmarkDto);
  }

  @Get('GetAll')
  @ApiOperation({ summary: 'Get all landmarks' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findAll() {
    return this.landmarksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one landmark' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findOne(@Param('id') id: string) {
    return this.landmarksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update landmark' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  update(
    @Param('id') id: string,
    @Body() updateLandmarkDto: UpdateLandmarkDto,
  ) {
    return this.landmarksService.update(+id, updateLandmarkDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete landmark' })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  remove(@Param('id') id: string) {
    return this.landmarksService.remove(+id);
  }
}
