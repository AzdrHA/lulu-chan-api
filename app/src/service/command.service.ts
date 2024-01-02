import { Injectable } from '@nestjs/common';
import { CommandRepository } from '../repository/command.repository';
import ApiException from '../exception/api.exception';
import { CommandCategoryRepository } from '../repository/command.category.repository';
import { CommandModel } from '../model/command.model';

@Injectable()
export default class CommandService {
  constructor(
    private readonly commandRepository: CommandRepository,
    private readonly commandCategoryRepository: CommandCategoryRepository,
  ) {}

  public create(data: CommandModel) {
    return this.commandRepository.save(data);
  }

  public delete(id: number): Promise<unknown> {
    return this.commandRepository.delete(id);
  }

  public read(id: number): Promise<unknown> {
    return this.commandRepository.findCommandById(id);
  }

  public update(id: number, data: CommandModel): Promise<unknown> {
    return this.commandRepository.update(id, data);
  }

  public async createOrUpdate(data: CommandModel, id?: number) {
    const command = await this.commandRepository.findCommandById(id);
    if (id && !command) throw new ApiException('Command not found');

    const existingCommand =
      await this.commandRepository.findCommandByNameAndIdNot(data.name, id);
    if (existingCommand) throw new ApiException('Command name already exists');

    if (data.category) {
      const existingCategory =
        await this.commandCategoryRepository.findCategoryById(
          <number>(<unknown>data.category),
        );
      if (!existingCategory) throw new ApiException('Category not found');
    }

    if (id) {
      return this.update(id, data);
    }
    return this.create(data);
  }
}
