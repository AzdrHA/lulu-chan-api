import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ImageFormatEntity } from '../ImageFormat/image.format.entity';
import { CommandEntity } from '../Command/command.entity';

@Entity('image')
export class ImageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public path: string;

  @Column()
  public size: number;

  @Column()
  public name: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;

  @ManyToOne(() => ImageFormatEntity, (format) => format.images)
  public format: ImageFormatEntity;

  @ManyToOne(() => CommandEntity, (command) => command.images)
  public command: CommandEntity;
}
