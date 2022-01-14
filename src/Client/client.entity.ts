import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ActivityType } from '../Types/ActivityType';
import { StatusType } from '../Types/StatusType';

@Entity('client')
@Unique(['clientId', 'name'])
export class ClientEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public clientId: string;

  @Column()
  public name: string;

  @Column({
    type: 'enum',
    enum: ActivityType,
    default: ActivityType.PLAYING,
  })
  public type: string;

  @Column({
    type: 'enum',
    enum: StatusType,
    default: StatusType.IDLE,
  })
  public status: string;
}
