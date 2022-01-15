import { Module } from '@nestjs/common';
import { GuildController } from './guild.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildRepository } from './guild.repository';
import { GuildSettingRepository } from '../GuildSetting/guild.setting.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuildRepository, GuildSettingRepository]),
  ],
  controllers: [GuildController],
})
export class GuildModule {}
