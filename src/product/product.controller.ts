import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get() findAll() {
    return this.productService.findAll();
  }
  @Get(':id') findOne(@Param() params) {
    return this.productService.findOne(params.id);
  }
  @Post() create(@Body() product: ProductEntity) {
    return this.productService.create(product);
  }
  @Put() update(@Body() product: ProductEntity) {
    return this.productService.update(product);
  }
  @Delete(':id') deleteProduct(@Param() params) {
    return this.productService.deleteOne(params.id);
  }
}
