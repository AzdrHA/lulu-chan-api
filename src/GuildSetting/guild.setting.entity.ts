import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GuildEntity } from '../Guild/guild.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsHexColor, IsOptional, IsString } from 'class-validator';

@Entity('guild_setting')
export class GuildSettingEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({
    required: true,
  })
  @IsString()
  @IsOptional()
  @Column({ default: 'l!' })
  public prefix: string;

  @ApiProperty({
    required: false,
  })
  @IsHexColor()
  @IsOptional()
  @Column({ default: '#67acbb' })
  public color: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ default: 'en' })
  public language: string;

  @OneToOne(() => GuildEntity, (guild) => guild.setting)
  public guild: GuildEntity;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
