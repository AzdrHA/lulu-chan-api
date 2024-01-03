import { Injectable } from '@nestjs/common';
import { CommandRepository } from '../repository/command.repository';
import ApiException from '../exception/api.exception';
import { CommandCategoryRepository } from '../repository/command.category.repository';
import { CommandModel } from '../model/command.model';
import { ImageRepository } from '../repository/image.repository';
import * as process from "process";

@Injectable()
export default class CommandService {
  constructor(
    private readonly commandRepository: CommandRepository,
    private readonly commandCategoryRepository: CommandCategoryRepository,
    private readonly imageRepository: ImageRepository,
  ) {}

  public create(data: CommandModel) {
    return this.commandRepository.save(data);
  }

  public async delete(id: number): Promise<unknown> {
    const command = await this.commandRepository.findCommandById(id);
    if (!command) throw new ApiException('Command not found');
    return this.commandRepository.delete(id);
  }

  public async read(id: number): Promise<unknown> {
    const command = await this.commandRepository.findCommandById(id);
    if (!command) throw new ApiException('Command not found');
    return command
  }

  public update(id: number, data: CommandModel): Promise<unknown> {
    return this.commandRepository.update(id, data);
  }

  public getOneCommandImageByName = async (name: string) => {
    const image = await this.imageRepository.getOneImageByCommandName(name);
    if (!image) throw new ApiException('Image not found', 404);

    return {
      image: process.env.CDN_URL + image.path,
      name: image.name,
    };
  };

  public getAllCommands = async () => {
    return  this.commandRepository.getAllCommands();
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
