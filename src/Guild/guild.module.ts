import { Module } from '@nestjs/common';
import { GuildController } from './guild.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuildRepository } from './guild.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GuildRepository])],
  controllers: [GuildController],
})
export class GuildModule {}
