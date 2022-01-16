import { EntityRepository, Repository } from 'typeorm';
import { ImageEntity } from './image.entity';

@EntityRepository(ImageEntity)
export class ImageRepository extends Repository<ImageEntity> {
  public getOneImageByCommandName(command: string) {
    return this.createQueryBuilder('i')
      .leftJoin('i.command', 'c')
      .where('c.name = :name')
      .orderBy('RAND()')
      .setParameter('name', command)
      .getOne();
  }
}
