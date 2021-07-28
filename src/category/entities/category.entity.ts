import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar', length: 50 }) title!: string;
  @Column({ type: 'simple-array' }) subCats?: number[];
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
