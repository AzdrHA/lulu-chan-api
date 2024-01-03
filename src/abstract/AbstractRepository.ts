import { Repository } from 'typeorm/repository/Repository';
import TypeormConfig from '../config/typeorm.config';
import { EntityTarget } from 'typeorm';
import { ObjectId } from 'typeorm/driver/mongodb/typings';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export default abstract class AbstractRepository<T> {
  protected readonly repository: Repository<T>;
  protected constructor(entity: EntityTarget<T>) {
    this.repository = TypeormConfig.getRepository(entity);
  }

  public create = () => {
    return this.repository.create();
  };

  public update = (
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectId
      | ObjectId[]
      | FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ) => {
    return this.repository.update(criteria, partialEntity);
  };

  public save = (entity: T) => {
    return this.repository.save(entity);
  };

  public delete = (
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectId
      | ObjectId[]
      | FindOptionsWhere<T>,
  ) => {
    return this.repository.delete(criteria);
  };

  public getRepository = () => {
    return this.repository;
  };
}
