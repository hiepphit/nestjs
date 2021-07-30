import { Injectable } from '@nestjs/common';
import { createQueryBuilder, getRepository } from 'typeorm';
import { Category } from './category/entities/category.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hiep Hello Nestjs and Backend!';
  }

  async getAllProd() {
    const data = await getRepository(Category)
      .createQueryBuilder('categories')
      .leftJoinAndSelect('categories.products', 'product')
      .getMany();

    return data;
  }
}
