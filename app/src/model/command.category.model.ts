import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { IsInt, IsString } from 'class-validator';
import { CommandModel } from './command.model';

@Entity('command_category')
@Unique(['name'])
export class CommandCategoryModel {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @IsString({ message: 'Name must be a string', groups: ['create', 'update'] })
  public name: string;

  @Column({ default: false, type: 'boolean' })
  @IsInt({ message: 'Category must be a string', groups: ['create', 'update'] })
  public nsfw: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany(() => CommandModel, (command) => command.category)
  public commands: CommandModel[];
}
