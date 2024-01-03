import AbstractRepository from '../abstract/AbstractRepository';
import { ImageModel } from '../model/image.model';

export class ImageRepository extends AbstractRepository<ImageModel> {
  constructor() {
    super(ImageModel);
  }

  public getOneImageByCommandName = (name: string) => {
    return this.repository
      .createQueryBuilder('image')
      .leftJoin('image.command', 'command')
      .where('command.name = :name')
      .setParameter('name', name)
      .orderBy('RAND()')
      .getOne();
  };

  public getOneImageByCommandNameAndMd5 = (name: string, md5: string) => {
    return this.repository
      .createQueryBuilder('image')
      .leftJoin('image.command', 'command')
      .where('command.name = :name')
      .andWhere('image.md5 = :md5')
      .setParameter('name', name)
      .setParameter('md5', md5)
      .getOne();
  };
}
