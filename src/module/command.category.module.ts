import { Module } from '@nestjs/common';
import { CommandCategoryRepository } from '../repository/command.category.repository';
import { CommandCategoryController } from '../controller/command.category.controller';
import CommandCategoryService from '../service/command.category.service';

@Module({
  controllers: [CommandCategoryController],
  providers: [CommandCategoryService, CommandCategoryRepository],
  exports: [],
})
export default class CommandCategoryModule {}
