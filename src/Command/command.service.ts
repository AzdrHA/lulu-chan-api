import { HttpStatus, Injectable } from '@nestjs/common';
import { CommandRepository } from './command.repository';
import { CommandCategoryRepository } from '../CommandCategory/command.category.repository';
import { Request } from 'express';
import { CommandEntity } from './command.entity';

@Injectable()
export class CommandService {
  private commandRepository: CommandRepository;
  private commandCategoryRepository: CommandCategoryRepository;

  constructor(
    commandRepository: CommandRepository,
    commandCategoryRepository: CommandCategoryRepository,
  ) {
    this.commandRepository = commandRepository;
    this.commandCategoryRepository = commandCategoryRepository;
  }

  /**
   * Create Command
   * @param {Request} request
   * @param {CommandEntity} data
   * @return {Response}
   */
  public async createCommand(request: Request, data: CommandEntity) {
    const category = await this.commandCategoryRepository.findOne(
      data.category,
    );

    if (!category)
      return request.res.status(HttpStatus.NOT_FOUND).json({
        error: `Category not found`,
      });

    const command = this.commandRepository.create(data);

    try {
      await this.commandRepository.save(command);
      return request.res.status(HttpStatus.CREATED).json({
        message: 'Command successfully created',
      });
    } catch (e) {
      switch (e.code) {
        case 'ER_DUP_ENTRY':
          return request.res.status(HttpStatus.CONFLICT).json({
            error: 'Command already existed',
          });
        default:
          request.res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e);
      }
    }
  }
}
