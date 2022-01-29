import { HttpStatus, Injectable } from '@nestjs/common';
import { ImageFormatRepository } from '../ImageFormat/image.format.repository';
import { ImageRepository } from './image.repository';
import { CommandRepository } from '../Command/command.repository';
import { ImageEntity } from './image.entity';
import { parse } from 'path';
import { Request, Response } from 'express';
import { Image } from '../Types/Image';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

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
   * @param response
   * @param  {Image[]} images
   * @return {Response}
   */
  public async uploadFile(
    request: Request,
    response: Response,
    images: Image[],
  ) {
    console.log(request.body);
    const result = [];
    const error = [];
    const command = await this.commandRepository.findOne(request.body.command);

    if (!command)
      return response.status(HttpStatus.NOT_FOUND).json({
        error: `Command not found`,
      });

    for (const file of images) {
      try {
        let format = await this.imageFormatRepository.findOne({
          mimetype: file.mimetype,
        });

        if (!format)
          format = await this.imageFormatRepository
            .create({ mimetype: file.mimetype })
            .save();

        const path = file.path.replace('public/', '');

        const image: ImageEntity = this.imageRepository.create(file);
        image.name = parse(file.filename).name;
        image.path = path;
        image.format = format;
        image.command = command;

        await this.imageRepository.save(image);
        result.push({
          index: images.indexOf(file),
          item: file,
          type: 'success',
        });
      } catch (e) {
        error.push({
          item: images.indexOf(file),
          index: file,
          type: 'error',
          error: e,
        });
      }
    }

    return response.status(HttpStatus.CREATED).json({
      result,
      error,
      message: `${result.length - error.length} images saved on ${
        result.length
      }`,
    });
  }

  public async getImageByCommandName(request: Request, command: string) {
    const image = await this.imageRepository.getOneImageByCommandName(command);
    if (!image)
      request.res.status(HttpStatus.OK).json(new HttpErrorByCode['404']());

    const result = {
      name: image.name,
      url: `http://cdn.lulu-chan.fun/${image.path}`,
    };

    request.res.json(result);
  }
}
