import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { GuildSettingEntity } from '../GuildSetting/guild.setting.entity';
import { GuildWarnEntity } from '../GuildWarn/guild.warn.entity';

@Entity('guild')
@Unique(['guild'])
export class GuildEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public guild: string;

  @OneToOne(() => GuildSettingEntity, (settings) => settings.guild)
  @JoinColumn()
  public setting: GuildSettingEntity;

  @OneToMany(() => GuildWarnEntity, (warn) => warn.guild)
  public warns: GuildWarnEntity[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
