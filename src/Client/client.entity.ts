import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ActivityType } from '../Types/ActivityType';
import { StatusType } from '../Types/StatusType';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';

@Entity('client')
@Unique(['clientId', 'name'])
export class ClientEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public clientId: string;

  @ApiProperty()
  @IsString()
  @Column()
  public name: string;

  @ApiProperty()
  @IsEnum(ActivityType)
  @Column({
    type: 'enum',
    enum: ActivityType,
    default: ActivityType.PLAYING,
  })
  public type: string;

  @ApiProperty()
  @IsEnum(StatusType, { each: true })
  @Column({
    type: 'enum',
    enum: StatusType,
    default: StatusType.IDLE,
  })
  public status: string;
}
