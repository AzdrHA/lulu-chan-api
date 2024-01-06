import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import CommandModule from './command.module';
import CommandCategoryModule from './command.category.module';
import ImageModule from './image.module';
import { TestController } from '../controller/test.controller';

@Module({
  imports: [DatabaseModule, CommandCategoryModule, CommandModule, ImageModule],
  controllers: [TestController],
})
export class AppModule {}
