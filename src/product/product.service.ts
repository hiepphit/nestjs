import { ProductEntity } from './entities/product.entity';
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
  async findByCatId(id: number): Promise<ProductEntity[]> {
    // const products = await this.productRepo
    //   .createQueryBuilder('product')
    //   .leftJoinAndSelect('product.catId', 'categories')
    //   .where('product.cat_id = :id', { id })
    //   .getMany();
    const products = await this.productRepo.find({
      catId: id,
    });
    return products;
  }
  async create(dto: CreateProductDto): Promise<any> {
    const product = await this.productRepo.create(dto);
    return await this.productRepo.save(product);
  }
  async edit(id: number, dto: EditProductDto) {
    const product = await this.productRepo.findOne(id);
    if (!product) throw new NotFoundException(`Product ${id} not exist`);
    const edited = Object.assign(product, dto);
    return await this.productRepo.save(edited);
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
