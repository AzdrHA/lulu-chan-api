import { HttpStatus, Injectable } from '@nestjs/common';
import { GuildSettingRepository } from './guild.setting.repository';
import { Request } from 'express';
import { GuildSettingEntity } from './guild.setting.entity';

@Injectable()
export class GuildSettingService {
  private guildSettingRepository: GuildSettingRepository;

  constructor(guildSettingRepository: GuildSettingRepository) {
    this.guildSettingRepository = guildSettingRepository;
  }

  public async getOrCreateSetting(request: Request, guildId: number) {
    let setting: GuildSettingEntity = await this.guildSettingRepository.findOne(
      { id: guildId },
    );
    if (!setting) setting = await this.guildSettingRepository.create().save();

    request.res.status(HttpStatus.OK).json(setting);
  }
}
