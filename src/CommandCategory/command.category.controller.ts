import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CommandCategoryEntity } from './command.category.entity';
import { Response } from 'express';
import { CommandCategoryRepository } from './command.category.repository';

@Controller('command/category')
export class CommandCategoryController {
  private commandCategoryRepository: CommandCategoryRepository;
  constructor(commandCategoryRepository: CommandCategoryRepository) {
    this.commandCategoryRepository = commandCategoryRepository;
  }

  @Post('/')
  public async createCategory(
    @Res() res: Response,
    @Body() data: CommandCategoryEntity,
  ) {
    const category = this.commandCategoryRepository.create(data);

    try {
      await this.commandCategoryRepository.save(category);
      return res.status(HttpStatus.CREATED).json({
        message: `Category ${category.name} successfully created`,
      });
    } catch (e) {
      switch (e.code) {
        case 'ER_DUP_ENTRY':
          return res.status(HttpStatus.CONFLICT).json({
            error: `Category ${category.name} already existed`,
          });
        default:
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e);
      }
    }
  }
}
