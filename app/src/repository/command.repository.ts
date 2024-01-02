import { CommandModel } from '../model/command.model';
import AbstractRepository from '../abstract/AbstractRepository';

export class CommandRepository extends AbstractRepository<CommandModel> {
  constructor() {
    super(CommandModel);
  }
  public findCommandByName = (name: string) => {
    return this.repository
      .createQueryBuilder('command')
      .where('command.name = :name')
      .setParameter('name', name)
      .getOne();
  };

  public findCommandById = (id?: number) => {
    return this.repository
      .createQueryBuilder('command')
      .where('command.id = :id')
      .setParameter('id', id)
      .getOne();
  };
}
