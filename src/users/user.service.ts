import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto, EditUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  async findOne(username: string): Promise<UserEntity> {
    const user = await this.usersRepo.findOne({
      where: { username: username },
    });
    if (!user) throw new NotFoundException('User not contain');
    return user;
  }
  async getOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepo.findOne(id);
    if (!user) throw new NotFoundException('User not contain');
    return user;
  }

  async getMany() {
    return await this.usersRepo.find();
  }

  async createOne(dto: CreateUserDto) {
    const userExist = await this.usersRepo.findOne({
      where: { email: dto.email },
    });
    if (userExist)
      throw new BadRequestException(
        `Email ${dto.email} already used on other account`,
      );
    const newUser = await this.usersRepo.create(dto);
    const user = await this.usersRepo.save(newUser);
    delete user.password;
    return user;
  }

  async editOne(id: number, dto: EditUserDto) {
    const user = await this.getOne(id);
    if (!user) throw new NotFoundException('Can not find user');
    return await this.usersRepo.update(id, dto);
  }

  async deleteOne(id: number) {
    return await this.usersRepo.delete(id);
  }
}
