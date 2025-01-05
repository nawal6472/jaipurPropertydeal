import { Test, TestingModule } from '@nestjs/testing';
import { MoreImgService } from './more_img.service';

describe('MoreImgService', () => {
  let service: MoreImgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoreImgService],
    }).compile();

    service = module.get<MoreImgService>(MoreImgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
