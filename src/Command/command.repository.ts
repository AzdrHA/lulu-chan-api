import { EntityRepository, Repository } from 'typeorm';
import { CommandEntity } from './command.entity';

@EntityRepository(CommandEntity)
export class CommandRepository extends Repository<CommandEntity> {}
