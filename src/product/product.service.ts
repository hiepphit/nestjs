import { ProductEntity } from './product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}

  async findOne(id: number): Promise<ProductEntity> {
    return await this.productRepo.findOne(id);
  }
  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepo.find();
  }
  async create(product: ProductEntity): Promise<ProductEntity> {
    return await this.productRepo.create(product);
  }
  async update(product: ProductEntity): Promise<UpdateResult> {
    return await this.productRepo.update(product.id, product);
  }
  async deleteOne(id: number): Promise<DeleteResult> {
    return await this.productRepo.delete(id);
  }
}
