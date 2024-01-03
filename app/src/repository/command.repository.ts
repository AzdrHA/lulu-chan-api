import { CommandModel } from '../model/command.model';
import AbstractRepository from '../abstract/AbstractRepository';

export class CommandRepository extends AbstractRepository<CommandModel> {
  constructor() {
    super(CommandModel);
  }
  public findCommandByName = (name: string) => {
    return this.repository
      .createQueryBuilder('command')
      .leftJoinAndSelect('command.category', 'category')
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

  public findCommandByNameAndIdNot = (name: string, id: number | null = 0) => {
    return this.repository
      .createQueryBuilder('command')
      .where('command.name = :name')
      .andWhere('command.id != :id')
      .setParameter('name', name)
      .setParameter('id', id)
      .getOne();
  };

  public getAllCommands = () => {
    return this.repository
      .createQueryBuilder('command')
      .getMany();
  };
}
