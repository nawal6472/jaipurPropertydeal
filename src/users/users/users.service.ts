import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (user) {
      throw new BadRequestException('User already exists.');
    } else {
      const user = this.userRepository.create(createUserDto);
      const userSave = await this.userRepository.save(user);
      user.password = await bcrypt.hash(user.password, 10);
      await this.userRepository.save(user);

      return {
        message: 'User created successfully.',
        user: userSave,
      };
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new BadRequestException('User not found.');
    }
    const updateUser = this.userRepository.merge(user, updateUserDto);
    const updateUserSave = await this.userRepository.save(updateUser);

    return {
      message: 'User updated successfully.',
      user: updateUser,
    };
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
