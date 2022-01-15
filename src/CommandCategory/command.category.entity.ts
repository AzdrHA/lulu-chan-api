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
import { CommandEntity } from '../Command/command.entity';
import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Unique(['name'])
@Entity('command_category')
export class CommandCategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @Column()
  public name: string;

  @ApiProperty({
    required: true,
  })
  @IsBoolean()
  @Column()
  public nsfw: boolean;

  @OneToMany(() => CommandEntity, (command) => command.category)
  public commands: CommandEntity[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
