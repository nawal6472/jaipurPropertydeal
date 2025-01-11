import { Test, TestingModule } from '@nestjs/testing';
import { PropertyNearByService } from './property-near-by.service';

describe('PropertyNearByService', () => {
  let service: PropertyNearByService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropertyNearByService],
    }).compile();

    service = module.get<PropertyNearByService>(PropertyNearByService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
