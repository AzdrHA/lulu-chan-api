import { Module } from '@nestjs/common';
import { GuildSettingController } from './guild.setting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildSettingRepository } from './guild.setting.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GuildSettingRepository])],
  controllers: [GuildSettingController],
})
export class GuildSettingModule {}
