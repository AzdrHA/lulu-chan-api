import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ImageEntity } from '../Image/image.entity';
import { CommandCategoryEntity } from '../CommandCategory/command.category.entity';

@Unique(['name'])
@Entity('command')
export class CommandEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({ default: 1 })
  public visible: boolean;

  @OneToMany(() => ImageEntity, (image) => image.command)
  public images: ImageEntity;

  @ManyToOne(() => CommandCategoryEntity, (category) => category.commands)
  public category: CommandCategoryEntity;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
