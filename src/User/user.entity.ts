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
import { GuildWarnEntity } from '../GuildWarn/guild.warn.entity';
import { UserBlacklistEntity } from '../UserBlacklist/user.blacklist.entity';
import { TokenEntity } from '../Token/token.entity';

@Entity('user')
@Unique(['userId'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public userId: string;

  public token: TokenEntity;

  @OneToMany(() => UserBlacklistEntity, (blacklist) => blacklist.user)
  public userBlacklists: UserBlacklistEntity[];

  @OneToMany(() => UserBlacklistEntity, (blacklist) => blacklist.moderator)
  public moderatorBlacklists: UserBlacklistEntity[];

  @OneToMany(() => GuildWarnEntity, (warn) => warn.user)
  public userGuildWarns: GuildWarnEntity[];

  @OneToMany(() => GuildWarnEntity, (warn) => warn.moderator)
  public moderatorGuildWarns: GuildWarnEntity[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
