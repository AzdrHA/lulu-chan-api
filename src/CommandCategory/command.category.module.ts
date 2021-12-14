import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandCategoryController } from './command.category.controller';
import { CommandCategoryService } from './command.category.service';
import { CommandCategoryRepository } from './command.category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CommandCategoryRepository])],
  controllers: [CommandCategoryController],
  providers: [CommandCategoryService],
})
export class CommandCategoryModule {}
