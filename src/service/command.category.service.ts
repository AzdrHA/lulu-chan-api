import { CommandCategoryRepository } from '../repository/command.category.repository';
import { CommandCategoryModel } from '../model/command.category.model';
import ApiException from '../exception/api.exception';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class CommandCategoryService {
  constructor(
    private readonly commandCategoryRepository: CommandCategoryRepository,
  ) {}

  public create(data: CommandCategoryModel) {
    return this.commandCategoryRepository.save(data);
  }

  public async delete(id: number): Promise<unknown> {
    const category = await this.commandCategoryRepository.findCategoryById(id);
    if (!category) throw new ApiException('Category not found');
    return this.commandCategoryRepository.delete(id);
  }

  public async read(id: number): Promise<unknown> {
    const category = await this.commandCategoryRepository.findCategoryById(id);
    if (!category) throw new ApiException('Category not found');
    return category;
  }

  public update(id: number, data: CommandCategoryModel): Promise<unknown> {
    return this.commandCategoryRepository.update(id, data);
  }

  public getAllCategoriesWithCommands(): Promise<unknown> {
    return this.commandCategoryRepository.getAllCategoriesWithCommands();
  }

  public async createOrUpdate(data: CommandCategoryModel, id?: number) {
    const category = await this.commandCategoryRepository.findCategoryById(id);
    if (id && !category) throw new ApiException('Category not found');

    const existingCategory =
      await this.commandCategoryRepository.findCategoryByNameAndIdNot(
        data.name,
        id,
      );
    if (existingCategory)
      throw new ApiException('Category name already exists');

    if (id) {
      return this.update(id, data);
    }
    return this.create(data);
  }
}
