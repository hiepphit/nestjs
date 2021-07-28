import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar', length: 50, nullable: false }) name!: string;
  @Column({ type: 'simple-array' }) catIds: string[];
  @Column({ type: 'varchar', length: 150, nullable: true })
  description?: string;
  @Column() quantity: number;
  @Column() price: number;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}