import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { imageInterceptor } from 'src/Interceptor/image.interceptor';
import { Image } from '../Types/Image';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  private imageService: ImageService;
  constructor(imageService: ImageService) {
    this.imageService = imageService;
  }

  @Post('/')
  @UseInterceptors(FilesInterceptor('images', null, imageInterceptor))
  public async uploadFile(
    @Req() request: Request,
    @UploadedFiles() files: Image[],
    @Body() data: any,
  ) {
    return this.imageService.uploadFile(request, files);
  }
}
