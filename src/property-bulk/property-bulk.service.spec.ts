import { Test, TestingModule } from '@nestjs/testing';
import { PropertyBulkService } from './property-bulk.service';

describe('PropertyBulkService', () => {
  let service: PropertyBulkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyBulkService],
    }).compile();

    service = module.get<PropertyBulkService>(PropertyBulkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
