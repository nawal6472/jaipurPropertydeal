import { Test, TestingModule } from '@nestjs/testing';
import { MoreImgController } from './more_img.controller';
import { MoreImgService } from './more_img.service';

describe('MoreImgController', () => {
  let controller: MoreImgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoreImgController],
      providers: [MoreImgService],
    }).compile();

    controller = module.get<MoreImgController>(MoreImgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
