import { EntityRepository, Repository } from 'typeorm';
import { CommandEntity } from './command.entity';
import { CommandCategoryEntity } from '../CommandCategory/command.category.entity';

@EntityRepository(CommandEntity)
export class CommandRepository extends Repository<CommandEntity> {
  public getListByCategory(category: CommandCategoryEntity) {
    return this.createQueryBuilder('c')
      .where('c.category = :category')
      .setParameter('category', category.id)
      .getMany();
  }
}
