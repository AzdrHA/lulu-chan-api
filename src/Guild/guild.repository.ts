import { EntityRepository, Repository } from 'typeorm';
import { GuildEntity } from './guild.entity';

@EntityRepository(GuildEntity)
export class GuildRepository extends Repository<GuildEntity> {}
