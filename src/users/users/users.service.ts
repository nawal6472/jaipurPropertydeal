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
    try {
      const userData = new User();
      const { name, email, password, status } = createUserDto;
      const hash = await bcrypt.hash(password, 10);
      userData.name = name?.trim();
      userData.email = email?.trim();
      userData.password = hash;
      userData.status = status;
      userData.cratedAt = new Date();

      const emailExists = await this.userRepository.findOneBy({ email });
      if (emailExists) {
        throw new BadRequestException('Email already exists.');
      }

      const userSave = await this.userRepository.save(userData);

      return {
        message: 'User created successfully.',
        user: userSave,
      };
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.name = updateUserDto.name?.trim();
    updateUserDto.email = updateUserDto.email?.trim();
    updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    updateUserDto.updatedAt = new Date();
    const updateUser = await this.userRepository.findOneBy({ id });
    await this.userRepository.update(id, updateUserDto);
    return {
      message: 'User updated successfully.',
      user: updateUser,
    };
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
