import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import CommandModule from './command.module';
import CommandCategoryModule from './command.category.module';

@Module({
  imports: [DatabaseModule, CommandCategoryModule, CommandModule],
})
export class AppModule {}
