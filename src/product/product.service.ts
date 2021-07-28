import { ProductEntity } from './product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto, EditProductDto } from './dtos';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}

  async findOne(id: number): Promise<ProductEntity> {
    const product = await this.productRepo.findOne(id);
    if (!product) throw new NotFoundException();
    return product;
  }
  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepo.find();
  }
  async create(dto: CreateProductDto): Promise<any> {
    const product = await this.productRepo.create(dto);
    return await this.productRepo.save(product);
  }
  async update(id: number, dto: EditProductDto): Promise<any> {
    const product = await this.productRepo.findOne(id);
    if (!product) throw new NotFoundException('Product does not exist');
    return await this.productRepo.update(id, dto);
  }
  async deleteOne(id: number): Promise<DeleteResult> {
    return await this.productRepo.delete(id);
  }
}
