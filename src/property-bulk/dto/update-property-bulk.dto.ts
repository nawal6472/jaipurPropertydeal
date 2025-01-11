import { PartialType } from '@nestjs/swagger';
import { CreatePropertyBulkDto } from './create-property-bulk.dto';

export class UpdatePropertyBulkDto extends PartialType(CreatePropertyBulkDto) {}
