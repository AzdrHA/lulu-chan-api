import { GuildRepository } from './guild.repository';
import { Injectable } from '@nestjs/common';
import { GuildEntity } from './guild.entity';

@Injectable()
export class GuildService {
  private guildRepository: GuildRepository;

  constructor(guildRepository: GuildRepository) {
    this.guildRepository = guildRepository;
  }

  public async getOrCreateGuild(guildId: string): Promise<GuildEntity> {
    const guild = await this.guildRepository.getGuildById(guildId);

    if (!guild)
      return await this.guildRepository.create({ guild: guildId }).save();

    return guild;
  }
}
