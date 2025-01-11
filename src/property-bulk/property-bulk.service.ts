import { Injectable } from '@nestjs/common';
import { CreatePropertyBulkDto } from './dto/create-property-bulk.dto';
import { UpdatePropertyBulkDto } from './dto/update-property-bulk.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/property/entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyBulkService {
  constructor(
    @InjectRepository(Property)
    private readonly propertyBulkRepository: Repository<Property>,
  ) {}
  async saveProperties(data: any[]) {
    const properties = data.map((row) => ({
      name: row['name'],
      locality: row['Locality'],
      full_address: row['Full Address'],
      price: row['Price'],
      bhk: row['BHK'],
      num_washroom: row['Washroom'],
      num_bathroom: row['Bathroom'],
      num_storge: row['Storage'],
      developer_name: row['Developer Name'],
      pro_facing: row['Facing'],
      pro_summary: row['Description'],
      built_up_area: row['Built Up Area'],
      carpet_area: row['Carpet Area'],
      super_built_up_area: row['Super Built Up Area'],
      total_floor: row['Total Floor'],
      road_width: row['Road Width'],
      corner_plot: row['Corner Plot'],
      floor_plan: row['Floor Plan'],
      pro_brochures: row['Brochure'],
      pro_video: row['Video'],
      type_patta: row['Type Patta'],
      furnished: row['Furnished'],
    }));
    await this.propertyBulkRepository.save(properties);
  }
}
