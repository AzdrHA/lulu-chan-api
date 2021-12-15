import { HttpStatus, Injectable } from '@nestjs/common';
import { ImageFormatRepository } from './image.format.repository';
import { Request } from 'express';
import { ImageFormatEntity } from './image.format.entity';

@Injectable()
export class ImageFormatService {
  private imageFormatRepository: ImageFormatRepository;

  public constructor(imageFormatRepository: ImageFormatRepository) {
    this.imageFormatRepository = imageFormatRepository;
  }

  /**
   * Create image format
   * @param {Request} request
   * @param {ImageFormatEntity} data
   * @return {Response}
   */
  public async createFormat(request: Request, data: ImageFormatEntity) {
    const format = this.imageFormatRepository.create(data);

    try {
      await this.imageFormatRepository.save(format);
      return request.res.status(HttpStatus.CREATED).json({
        message: 'Mimetype successfully created',
      });
    } catch (e) {
      switch (e.code) {
        case 'ER_DUP_ENTRY':
          return request.res.status(HttpStatus.CONFLICT).json({
            error: 'Mimetype already existed',
          });
        default:
          request.res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e);
      }
    }
  }

  /**
   * Delete image format
   * @param {Request} request
   * @param {number} id
   * @return {Response}
   */
  public async deleteFormat(request: Request, id: number) {
    const format = await this.imageFormatRepository.findOne(id);
    if (!format)
      return request.res.status(HttpStatus.NOT_FOUND).json({
        error: `Mimetype not found`,
      });

    try {
      await this.imageFormatRepository.remove(format);
      return request.res.status(HttpStatus.OK).json({
        message: `Mimetype: "${format.mimetype}" has been removed`,
      });
    } catch (e) {
      return request.res.status(HttpStatus.CONFLICT).json({
        error: 'Impossible to remove this mimetype',
      });
    }
  }
}
