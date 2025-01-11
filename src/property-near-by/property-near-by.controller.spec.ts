import { Test, TestingModule } from '@nestjs/testing';
import { PropertyNearByController } from './property-near-by.controller';
import { PropertyNearByService } from './property-near-by.service';

describe('PropertyNearByController', () => {
  let controller: PropertyNearByController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertyNearByController],
      providers: [PropertyNearByService],
    }).compile();

    controller = module.get<PropertyNearByController>(PropertyNearByController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
