import { CategoryEntity } from './../category/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 50 }) name: string;
  @ManyToOne(() => CategoryEntity, (cat) => cat.id)
  catId: number;
  @Column('text') description: string;
  @Column() quantity: number;
  @Column() price: number;
}
