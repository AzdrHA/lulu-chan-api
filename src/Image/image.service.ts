import { HttpStatus, Injectable } from '@nestjs/common';
import { ImageFormatRepository } from '../ImageFormat/image.format.repository';
import { ImageRepository } from './image.repository';
import { CommandRepository } from '../Command/command.repository';
import { ImageEntity } from './image.entity';
import { parse } from 'path';
import { Request } from 'express';
import { Image } from '../Types/Image';

@Injectable()
export class ImageService {
  private imageFormatRepository: ImageFormatRepository;
  private imageRepository: ImageRepository;
  private commandRepository: CommandRepository;

  constructor(
    imageFormatRepository: ImageFormatRepository,
    commandRepository: CommandRepository,
    imageRepository: ImageRepository,
  ) {
    this.imageFormatRepository = imageFormatRepository;
    this.commandRepository = commandRepository;
    this.imageRepository = imageRepository;
  }

  /**
   * Upload file
   * @param {Request} request
   * @param  {Image[]} files
   * @return {Response}
   */
  public async uploadFile(request: Request, files: Image[]) {
    console.log(request.body);
    const result = [];
    const error = [];
    const command = await this.commandRepository.findOne(request.body.command);

    if (!command)
      return request.res.status(HttpStatus.NOT_FOUND).json({
        error: `Command not found`,
      });

    for (const file of files) {
      try {
        const format = await this.imageFormatRepository.findOne({
          mimetype: file.mimetype,
        });

        if (!format) continue;

        const path = file.path.replace('public/', '');

        const image: ImageEntity = this.imageRepository.create(file);
        image.name = parse(file.filename).name;
        image.path = path;
        image.format = format;
        image.command = command;

        await this.imageRepository.save(image);
        result.push({
          index: files.indexOf(file),
          item: file,
          type: 'success',
        });
      } catch (e) {
        error.push({
          item: files.indexOf(file),
          index: file,
          type: 'error',
          error: e,
        });
      }
    }

    return request.res.status(HttpStatus.CREATED).json({
      result,
      error,
      message: `${result.length - error.length} images saved on ${
        result.length
      }`,
    });
  }
}
