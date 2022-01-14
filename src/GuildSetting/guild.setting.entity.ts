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

  @Column()
  public prefix: string;

  @Column()
  public color: string;

  @Column()
  public language: string;

  @OneToOne(() => GuildEntity, (guild) => guild.setting)
  public guild: GuildEntity;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;
}
