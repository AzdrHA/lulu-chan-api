import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../User/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

@Entity('user_blacklist')
export class UserBlacklistEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @IsInt()
  @ManyToOne(() => UserEntity, (user) => user.userBlacklists)
  @JoinColumn()
  public user: UserEntity;

  @IsInt()
  @ManyToOne(() => UserEntity, (user) => user.moderatorBlacklists)
  @JoinColumn()
  public moderator: UserEntity;

  @ApiProperty()
  @IsString()
  @Column()
  public reason: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;

  @DeleteDateColumn()
  public removeAt: Date;
}
