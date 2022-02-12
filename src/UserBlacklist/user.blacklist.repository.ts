import { EntityRepository, Repository } from 'typeorm';
import { UserBlacklistEntity } from './user.blacklist.entity';

@EntityRepository(UserBlacklistEntity)
export class UserBlacklistRepository extends Repository<UserBlacklistEntity> {
  public checksUserBlacklistWithDeleted = (id: number) => {
    return this.createQueryBuilder('blacklist')
      .leftJoin('blacklist.user', 'user')
      .withDeleted()
      .where('user.id = :id')
      .where('blacklist.removeAt IS NOT NULL')
      .setParameter('id', id)
      .getOne();
  };

  public checksUserBlacklist = (id: number) => {
    return this.createQueryBuilder('blacklist')
      .leftJoin('blacklist.user', 'user')
      .where('user.id = :id')
      .setParameter('id', id)
      .getOne();
  };

  public getAllUserBlacklist = (take: number, skip: number) => {
    return this.createQueryBuilder('blacklist')
      .leftJoinAndSelect('blacklist.user', 'user')
      .take(take)
      .skip(skip)
      .getManyAndCount();
  };
}
