import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { IsOptional, IsString, IsBoolean } from 'class-validator';
import { CommandModel } from './command.model';

@Entity('command_category')
@Unique(['name'])
export class CommandCategoryModel {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @IsString({ message: 'Name must be a string', groups: ['create', 'update'] })
  public name: string;

  @Column()
  public slug: string;

  @Column({ default: false, type: 'boolean' })
  @IsOptional({ groups: ['create', 'update'] })
  @IsBoolean({
    message: 'NSFW must be a boolean',
    groups: ['create', 'update'],
  })
  public nsfw = false;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany(() => CommandModel, (command) => command.category)
  public commands: CommandModel[];
}
