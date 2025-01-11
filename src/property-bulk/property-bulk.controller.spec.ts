import { Test, TestingModule } from '@nestjs/testing';
import { PropertyBulkController } from './property-bulk.controller';
import { PropertyBulkService } from './property-bulk.service';

describe('PropertyBulkController', () => {
  let controller: PropertyBulkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyBulkController],
      providers: [PropertyBulkService],
    }).compile();

    controller = module.get<PropertyBulkController>(PropertyBulkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
