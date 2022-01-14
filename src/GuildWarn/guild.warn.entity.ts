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
import { GuildEntity } from '../Guild/guild.entity';
import { UserEntity } from '../User/user.entity';

@Entity('guild_warn')
export class GuildWarnEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public reason: string;

  @DeleteDateColumn()
  public deleteAt: string;

  @ManyToOne(() => UserEntity, (user) => user.userGuildWarns)
  @JoinColumn()
  public user: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.moderatorGuildWarns)
  @JoinColumn()
  public moderator: UserEntity;

  @ManyToOne(() => GuildEntity, (guild) => guild.warns)
  @JoinColumn()
  public guild: GuildEntity;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
