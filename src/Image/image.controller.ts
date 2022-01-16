import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { imageInterceptor } from 'src/Interceptor/image.interceptor';
import { Image } from '../Types/Image';
import { ImageService } from './image.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Image')
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
    @Res() response: Response,
    @UploadedFiles() images: Image[],
    @Body() data: any,
  ) {
    return this.imageService.uploadFile(request, response, images);
  }

  @Get('/:command')
  public async getImageByCommandName(
    @Req() request: Request,
    @Param('command') command: string,
  ) {
    return this.imageService.getImageByCommandName(request, command);
  }
}
