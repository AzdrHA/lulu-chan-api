import { Module } from '@nestjs/common';
import { GuildSettingController } from './guild.setting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildSettingRepository } from './guild.setting.repository';
import { GuildSettingService } from './guild.setting.service';
import { GuildRepository } from '../Guild/guild.repository';
import { GuildService } from '../Guild/guild.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuildRepository, GuildSettingRepository]),
  ],
  controllers: [GuildSettingController],
  providers: [GuildSettingService, GuildService],
})
export class GuildSettingModule {}
