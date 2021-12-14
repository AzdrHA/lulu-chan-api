import { EntityRepository, Repository } from 'typeorm';
import { ImageFormatEntity } from './image.format.entity';

@EntityRepository(ImageFormatEntity)
export class ImageFormatRepository extends Repository<ImageFormatEntity> {}
