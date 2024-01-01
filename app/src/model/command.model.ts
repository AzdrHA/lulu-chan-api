import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';
import { IsString } from 'class-validator';

@Entity('command')
@Unique(['name'])
export default class CommandModel {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @IsString({ message: 'Name must be a string', groups: ['create', 'update'] })
  public name: string;

  @Column({ default: 0 })
  public use = 0;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
