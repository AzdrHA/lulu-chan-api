import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import CommandModule from './command.module';

@Module({
  imports: [DatabaseModule, CommandModule],
})
export class AppModule {}
