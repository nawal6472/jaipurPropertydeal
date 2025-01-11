import { Module } from '@nestjs/common';
import { MoreImgService } from './more_img.service';
import { MoreImgController } from './more_img.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoreImg } from './entities/more_img.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoreImg])],
  controllers: [MoreImgController],
  providers: [MoreImgService],
})
export class MoreImgModule {}
