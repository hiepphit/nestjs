import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product/product.service';

@ApiTags('APP Module')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prodService: ProductService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('all-product')
  async getAllProd() {
    const data = await this.appService.getAllProd();
    return {
      message: 'Successfully',
      data,
    };
  }
}
