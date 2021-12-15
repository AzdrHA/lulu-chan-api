import { Module } from '@nestjs/common';
import { CommandController } from './command.controller';
import { CommandService } from './command.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandRepository } from './command.repository';
import { CommandCategoryRepository } from '../CommandCategory/command.category.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommandRepository, CommandCategoryRepository]),
  ],
  controllers: [CommandController],
  providers: [CommandService],
})
export class CommandModule {}
