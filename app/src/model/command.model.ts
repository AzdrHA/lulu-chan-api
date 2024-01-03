import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { IsInt, IsString } from 'class-validator';
import { CommandCategoryModel } from './command.category.model';
import { ImageModel } from './image.model';

@Entity('command')
@Unique(['name'])
export class CommandModel {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @IsString({ message: 'Name must be a string', groups: ['create', 'update'] })
  public name: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @ManyToOne(() => CommandCategoryModel, (category) => category.commands)
  @IsInt({ message: 'Category must be a int', groups: ['create', 'update'] })
  public category: CommandCategoryModel;

  @OneToMany(() => ImageModel, (image) => image.command)
  public images: ImageModel[];
}
