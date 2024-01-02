import AbstractRepository from '../abstract/AbstractRepository';
import { CommandCategoryModel } from '../model/command.category.model';

export class CommandCategoryRepository extends AbstractRepository<CommandCategoryModel> {
  constructor() {
    super(CommandCategoryModel);
  }

  public findCategoryById = (id: number) => {
    return this.repository
      .createQueryBuilder('category')
      .where('category.id = :id')
      .setParameter('id', id)
      .getOne();
  };

  public findCategoryByName = (name: string) => {
    return this.repository
      .createQueryBuilder('category')
      .where('category.name = :name')
      .setParameter('name', name)
      .getOne();
  };
}
