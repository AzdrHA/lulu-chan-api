import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageFormatRepository } from '../ImageFormat/image.format.repository';
import { CommandRepository } from '../Command/command.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ImageFormatRepository, CommandRepository]),
  ],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
