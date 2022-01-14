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

@Entity('guild_setting')
export class GuildSettingEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ default: 'l!' })
  public prefix: string;

  @Column({ default: '#67acbb' })
  public color: string;

  @Column({ default: 'en' })
  public language: string;

  @OneToOne(() => GuildEntity, (guild) => guild.setting)
  public guild: GuildEntity;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
