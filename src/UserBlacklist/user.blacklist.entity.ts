import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../User/user.entity';

@Entity('user_blacklist')
export class UserBlacklistEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => UserEntity, (user) => user.userBlacklists)
  @JoinColumn()
  public user: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.moderatorBlacklists)
  @JoinColumn()
  public moderator: UserEntity;

  @Column()
  public reason: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;

  @DeleteDateColumn()
  public removeAt: Date;
}
