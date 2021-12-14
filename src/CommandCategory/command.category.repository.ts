import { EntityRepository, Repository } from 'typeorm';
import { CommandCategoryEntity } from './command.category.entity';

@EntityRepository(CommandCategoryEntity)
export class CommandCategoryRepository extends Repository<CommandCategoryEntity> {}
