import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepo: Repository<UsersEntity>,
  ) {}

  async findOne(username: string): Promise<UsersEntity> {
    return this.usersRepo.findOne({ where: { username: username } });
  }
}
