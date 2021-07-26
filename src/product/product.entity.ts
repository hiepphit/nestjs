import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 500 }) name: string;
  @Column() catId: number;
  @Column('text') description: string;
  @Column() quantity: number;
  @Column() price: number;
}
