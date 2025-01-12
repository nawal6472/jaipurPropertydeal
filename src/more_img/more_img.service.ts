import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MoreImg } from './entities/more_img.entity';
import { UpdateMoreImgDto } from './dto/update-more_img.dto';
@Injectable()
export class MoreImgService {
  constructor(
    @InjectRepository(MoreImg)
    private readonly moreImgRepository: Repository<MoreImg>,
  ) {}

  async createMoreImg(data: Partial<MoreImg>): Promise<MoreImg> {
    const property = this.moreImgRepository.create(data);
    return this.moreImgRepository.save(property);
  }

  async findAll(): Promise<MoreImg[]> {
    return this.moreImgRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} moreImg`;
  }

  update(id: number, updateMoreImgDto: UpdateMoreImgDto) {
    return `This action updates a #${id} moreImg`;
  }

  remove(id: number) {
    return `This action removes a #${id} moreImg`;
  }
}
