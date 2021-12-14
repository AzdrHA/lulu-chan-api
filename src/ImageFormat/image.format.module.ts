import { ImageFormatController } from './image.format.controller';
import { ImageFormatService } from './image.format.service';
import { Module } from '@nestjs/common';
import { ImageFormatRepository } from './image.format.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ImageFormatRepository])],
  controllers: [ImageFormatController],
  providers: [ImageFormatService],
})
export class ImageFormatModule {}
