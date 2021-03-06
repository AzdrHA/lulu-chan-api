import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ImageEntity } from '../Image/image.entity';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Unique(['mimetype'])
@Entity('image_format')
export class ImageFormatEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @Column()
  public mimetype: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;

  @OneToMany(() => ImageEntity, (image) => image.format)
  public images: ImageEntity[];
}
