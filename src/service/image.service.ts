import { CommandRepository } from '../repository/command.repository';
import { ImageRepository } from '../repository/image.repository';
import ApiException from '../exception/api.exception';
import { Injectable } from '@nestjs/common';
import { parse } from 'path';
import * as md5 from 'md5';
import * as fs from 'fs';

@Injectable()
export default class ImageService {
  constructor(
    private readonly commandRepository: CommandRepository,
    private readonly imageRepository: ImageRepository,
  ) {}

  public uploadImage = async (
    category: string,
    name: string,
    files: Express.Multer.File[],
  ) => {
    const command = await this.commandRepository.findCommandByName(name);
    if (!command || command.category.slug !== category) {
      throw new ApiException('Command not found', 404);
    }

    for (const file of files) {
      const image = this.imageRepository.create();
      image.name = parse(file.filename).name;
      image.path = file.path.replace('public/', '');
      image.command = command;

      fs.readFile(file.path, async (err, data) => {
        if (err) throw err;
        const mmd5 = md5(data);
        const checkImage =
          await this.imageRepository.getOneImageByCommandNameAndMd5(name, mmd5);
        if (checkImage) {
          fs.unlinkSync(file.path);
          return;
        } else {
          image.md5 = mmd5;
          await this.imageRepository.save(image);
        }
      });
    }

    return files;
  };
}
