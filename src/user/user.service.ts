import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findOne(username: string): Promise<UserEntity> {
    return this.userRepo.findOne({ where: { username: username } });
  }
}
