import { HttpStatus, Injectable } from '@nestjs/common';
import { CommandCategoryRepository } from './command.category.repository';
import { CommandRepository } from '../Command/command.repository';
import { Request } from 'express';
import { CommandCategoryEntity } from './command.category.entity';

@Injectable()
export class CommandCategoryService {
  private commandCategoryRepository: CommandCategoryRepository;
  private commandRepository: CommandRepository;

  constructor(
    commandCategoryRepository: CommandCategoryRepository,
    commandRepository: CommandRepository,
  ) {
    this.commandCategoryRepository = commandCategoryRepository;
    this.commandRepository = commandRepository;
  }

  /**
   * Create Category
   * @param {Request} request
   * @param {CommandCategoryEntity} data
   * @return {Response}
   */
  public async createCategory(request: Request, data: CommandCategoryEntity) {
    const category = this.commandCategoryRepository.create(data);

    try {
      await this.commandCategoryRepository.save(category);
      return request.res.status(HttpStatus.CREATED).json({
        message: `Category ${category.name} successfully created`,
      });
    } catch (e) {
      switch (e.code) {
        case 'ER_DUP_ENTRY':
          return request.res.status(HttpStatus.CONFLICT).json({
            error: `Category ${category.name} already existed`,
          });
        default:
          request.res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e);
      }
    }
  }

  /**
   * Get Category List
   * @return {Response}
   */
  public async getList() {
    return this.commandCategoryRepository.find();
  }

  /**
   * Get Command list of Category
   * @param {Request} request
   * @param {number} id
   * @return {Response}
   */
  public async getCommandListByCategory(request: Request, id: number) {
    const category = await this.commandCategoryRepository.findOne(id);

    if (!category)
      request.res.status(HttpStatus.NOT_FOUND).json({
        error: `Category not found`,
      });

    request.res
      .status(HttpStatus.OK)
      .json(await this.commandRepository.getListByCategory(category));
  }

  public async getCategoryCommandList() {
    return this.commandCategoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.commands', 'commands')
      .getMany();
  }
}
