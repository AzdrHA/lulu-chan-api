import { EntityRepository, Repository } from 'typeorm';
import { GuildSettingEntity } from './guild.setting.entity';

@EntityRepository(GuildSettingEntity)
export class GuildSettingRepository extends Repository<GuildSettingEntity> {
  public getSettingByGuild = (guildId: string) => {
    return this.createQueryBuilder('s')
      .leftJoin('s.guild', 'guild')
      .where('guild.guild = :guild')
      .setParameter('guild', guildId)
      .getOne();
  };
}
