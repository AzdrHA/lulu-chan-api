import {
  Body,
  Controller,
  Delete,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ImageFormatService } from './image.format.service';
import { Response } from 'express';
import { ImageFormatEntity } from './image.format.entity';
import { ImageFormatRepository } from './image.format.repository';

@Controller('/image/format')
export class ImageFormatController {
  public constructor(
    private readonly imageFormatService: ImageFormatService,
    private readonly imageFormatRepository: ImageFormatRepository,
  ) {}

  /**
   * Create image format
   * @param {Response} res
   * @param {ImageFormatEntity} data
   * @return {Response}
   */
  @Post('/')
  public async createFormat(
    @Res() res: Response,
    @Body() data: ImageFormatEntity,
  ) {
    const format = this.imageFormatRepository.create(data);

    try {
      await this.imageFormatRepository.save(format);
      return res.status(HttpStatus.CREATED).json({
        message: 'Mimetype successfully created',
      });
    } catch (e) {
      switch (e.code) {
        case 'ER_DUP_ENTRY':
          return res.status(HttpStatus.CONFLICT).json({
            error: 'Mimetype already existed',
          });
        default:
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e);
      }
    }
  }

  /**
   * Delete image format
   * @param {Response} res
   * @param {number} id
   * @return {Response}
   */
  @Delete('/:id')
  public async deleteFormat(@Res() res: Response, @Param('id') id: number) {
    const format = await this.imageFormatRepository.findOne(id);
    if (!format)
      return res.status(HttpStatus.NOT_FOUND).json({
        error: `Mimetype not found`,
      });

    try {
      await this.imageFormatRepository.remove(format);
      return res.status(HttpStatus.OK).json({
        message: `Mimetype: "${format.mimetype}" has been removed`,
      });
    } catch (e) {
      return res.status(HttpStatus.CONFLICT).json({
        error: 'Impossible to remove this mimetype',
      });
    }
  }
}
