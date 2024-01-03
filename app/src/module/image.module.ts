import { Module } from '@nestjs/common';
import ImageService from '../service/image.service';
import ImageController from '../controller/image.controller';
import { ImageRepository } from '../repository/image.repository';
import { CommandRepository } from '../repository/command.repository';

@Module({
  controllers: [ImageController],
  providers: [ImageService, ImageRepository, CommandRepository],
  exports: [],
})
export default class ImageModule {}
