import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class EditProductDto extends PartialType(CreateProductDto) {}
