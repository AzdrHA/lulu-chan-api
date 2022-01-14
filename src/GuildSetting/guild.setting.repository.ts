import { EntityRepository, Repository } from 'typeorm';
import { GuildSettingEntity } from './guild.setting.entity';

@EntityRepository(GuildSettingEntity)
export class GuildSettingRepository extends Repository<GuildSettingEntity> {}
