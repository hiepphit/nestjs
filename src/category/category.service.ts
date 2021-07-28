import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private readonly catRepo: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const cat = await this.catRepo.create(createCategoryDto);
    return await this.catRepo.save(cat);
  }

  async findAll() {
    return await this.catRepo.find();
  }

  async findOne(id: number) {
    const cat = await this.catRepo.findOne(id);
    if (!cat) throw new NotFoundException(`Category ${id} does not exist`);
    return cat;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const cat = await this.catRepo.findOne(id);
    if (!cat) throw new NotFoundException(`Category ${id} does not exist`);
    const newCat = Object.assign(cat, updateCategoryDto);
    return await this.catRepo.save(newCat);
  }

  async remove(id: number) {
    return this.catRepo.delete(id);
  }
}
