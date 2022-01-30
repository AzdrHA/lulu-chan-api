import { HttpStatus, Injectable } from '@nestjs/common';
import { GuildSettingRepository } from './guild.setting.repository';
import { Request } from 'express';
import { GuildRepository } from '../Guild/guild.repository';
import { GuildService } from '../Guild/guild.service';
import { GuildSettingEntity } from './guild.setting.entity';

@Injectable()
export class GuildSettingService {
  private guildSettingRepository: GuildSettingRepository;
  private guildRepository: GuildRepository;

  private guildService: GuildService;

  constructor(
    guildSettingRepository: GuildSettingRepository,
    guildRepository: GuildRepository,
    guildService: GuildService,
  ) {
    this.guildSettingRepository = guildSettingRepository;
    this.guildRepository = guildRepository;
    this.guildService = guildService;
  }

  public async getOrCreateSetting(request: Request, guildId: string) {
    const guild = await this.guildService.getOrCreateGuild(guildId);

    if (!guild.setting) {
      const setting = this.guildSettingRepository.create();
      await this.guildSettingRepository.save(setting);

      guild.setting = setting;
      await this.guildRepository.save(guild);
    }

    request.res.status(HttpStatus.OK).json(guild);
  }

  public async updateSetting(
    request: Request,
    guildId: string,
    newSetting: GuildSettingEntity,
  ) {
    const setting = await this.guildSettingRepository.getSettingByGuild(
      guildId,
    );

    await this.guildSettingRepository.update(setting.id, newSetting);
    request.res.json(newSetting);
  }
}
