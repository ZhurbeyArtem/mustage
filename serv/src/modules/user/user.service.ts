import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { filterUserDto } from './dto/filterUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async getAll(data: filterUserDto): Promise<User[]> {
    try {
      return await this.usersRepository.find({ where: { ...data } });
    } catch (error) {
      throw new HttpException(
        'Opps something went wrong try again',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async findOne(username: string): Promise<User> {
    try {
      return await this.usersRepository.findOne({
        where: { username: username },
      });
    } catch (error) {
      throw new HttpException(
        'Opps something went wrong try again',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  async create(data: createUserDto): Promise<User> {
    try {
      const user = await this.findOne(data.telegram_id);
      if (user) return user;
      return await this.usersRepository.save(data);
    } catch (error) { 
      throw new HttpException(
        'Opps something went wrong try again',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
