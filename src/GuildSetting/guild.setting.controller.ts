import { Body, Controller, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { GuildSettingService } from './guild.setting.service';
import { ApiTags } from '@nestjs/swagger';
import { GuildSettingEntity } from './guild.setting.entity';

@ApiTags('Guild')
@Controller('guild/setting')
export class GuildSettingController {
  private guildSettingService: GuildSettingService;
  constructor(guildSettingService: GuildSettingService) {
    this.guildSettingService = guildSettingService;
  }

  @Post('/:guildId')
  public getOrCreateSetting(
    @Req() request: Request,
    @Param('guildId') guildId: string,
  ) {
    return this.guildSettingService.getOrCreateSetting(request, guildId);
  }

  @Put('/:guildId')
  public updateSetting(
    @Req() request: Request,
    @Param('guildId') guildId: string,
    @Body() setting: GuildSettingEntity,
  ) {
    return this.guildSettingService.updateSetting(request, guildId, setting);
  }
}
