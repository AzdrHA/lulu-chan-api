import { Controller, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { GuildSettingService } from './guild.setting.service';

@Controller('guild/setting')
export class GuildSettingController {
  private guildSettingService: GuildSettingService;
  constructor(guildSettingService: GuildSettingService) {
    this.guildSettingService = guildSettingService;
  }

  @Post('/:guildId')
  public getOrCreateSetting(
    @Req() request: Request,
    @Param('guildId') guildId: number,
  ) {
    return this.guildSettingService.getOrCreateSetting(request, guildId);
  }
}
