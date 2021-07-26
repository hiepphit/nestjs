import { CategoryEntity } from './category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly catRepo: Repository<CategoryEntity>,
  ) {}
  async findOne(id: number): Promise<CategoryEntity> {
    return await this.catRepo.findOne(id);
  }
  async findAll(): Promise<CategoryEntity[]> {
    return await this.catRepo.find();
  }
  async create(product: CategoryEntity): Promise<CategoryEntity> {
    return await this.catRepo.create(product);
  }
  async update(product: CategoryEntity): Promise<UpdateResult> {
    return await this.catRepo.update(product.id, product);
  }
  async deleteOne(id: number): Promise<DeleteResult> {
    return await this.catRepo.delete(id);
  }
}
