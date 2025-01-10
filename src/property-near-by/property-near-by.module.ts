import { Module } from '@nestjs/common';
import { PropertyNearByService } from './property-near-by.service';
import { PropertyNearByController } from './property-near-by.controller';
import { PropertyNearBy } from './entities/property-near-by.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PropertyNearBy])],
  controllers: [PropertyNearByController],
  providers: [PropertyNearByService],
})
export class PropertyNearByModule {}
