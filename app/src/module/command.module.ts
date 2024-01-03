import { Module } from '@nestjs/common';
import { CommandController } from '../controller/command.controller';
import CommandService from '../service/command.service';
import { CommandRepository } from '../repository/command.repository';
import { CommandCategoryRepository } from '../repository/command.category.repository';
import { ImageRepository } from '../repository/image.repository';

@Module({
  controllers: [CommandController],
  providers: [
    CommandService,
    CommandRepository,
    CommandCategoryRepository,
    ImageRepository,
  ],
  exports: [],
})
export default class CommandModule {}
