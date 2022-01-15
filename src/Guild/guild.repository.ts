import { EntityRepository, Repository } from 'typeorm';
import { GuildEntity } from './guild.entity';

@EntityRepository(GuildEntity)
export class GuildRepository extends Repository<GuildEntity> {
  public async getGuildById(guildId: string): Promise<GuildEntity> {
    return await this.createQueryBuilder('g')
      .leftJoinAndSelect('g.setting', 's')
      .where('g.guild = :guildId')
      .setParameter('guildId', guildId)
      .getOne();
  }
}
