import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  catIds: string[];

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
