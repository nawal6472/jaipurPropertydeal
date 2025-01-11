import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from 'src/property/entities/property.entity';
import { PropertyBulkController } from './property-bulk.controller';
import { PropertyBulkService } from './property-bulk.service';

@Module({
  imports: [TypeOrmModule.forFeature([Property])],
  controllers: [PropertyBulkController],
  providers: [PropertyBulkService],
})
export class PropertyBulkModule {}
