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
import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Unique(['name'])
@Entity('command')
export class CommandEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @Column()
  public name: string;

  @Column({ default: 1 })
  public visible: boolean;

  @OneToMany(() => ImageEntity, (image) => image.command)
  public images: ImageEntity;

  @ApiProperty({
    required: true,
    type: CommandEntity,
  })
  @IsInt()
  @ManyToOne(() => CommandCategoryEntity, (category) => category.commands)
  public category: CommandCategoryEntity;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
