import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto, EditProductDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async findAll() {
    const data = await this.productService.findAll();
    return {
      message: 'Successfully',
      data,
    };
  }
  @Get('/by-category/:id')
  async findByCat(@Param() params) {
    const data = await this.productService.findByCatId(params.id);
    return {
      message: 'Successfully',
      data,
      category: +params.id,
    };
  }
  @Get(':id')
  async findOne(@Param() params) {
    const data = await this.productService.findOne(params.id);
    return {
      message: 'Successfully',
      data,
    };
  }
  @Post() create(@Body() productDto: CreateProductDto) {
    return this.productService.create(productDto);
  }
  @Put(':id') edit(@Param('id') id: string, @Body() dto: EditProductDto) {
    return this.productService.edit(+id, dto);
  }
  @Patch(':id') update(@Param('id') id: number, @Body() dto: EditProductDto) {
    return this.productService.update(id, dto);
  }
  @Delete(':id') deleteProduct(@Param() params) {
    return this.productService.deleteOne(params.id);
  }
}
