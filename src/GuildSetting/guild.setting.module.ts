import { Module } from '@nestjs/common';
import { GuildSettingController } from './guild.setting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildSettingRepository } from './guild.setting.repository';
import { GuildSettingService } from './guild.setting.service';

@Module({
  imports: [TypeOrmModule.forFeature([GuildSettingRepository])],
  controllers: [GuildSettingController],
  providers: [GuildSettingService],
})
export class GuildSettingModule {}
