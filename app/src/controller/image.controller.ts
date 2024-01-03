import {
  Controller,
  Param,
  Post,
  Res,
  UploadedFiles, UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import AbstractController from '../abstract/AbstractController';
import ImageService from '../service/image.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import multerConfig from '../config/multer.config';
import {AuthGuard} from "../guard/auth.guard";

@Controller('/image/:category/:name')
@UseGuards(AuthGuard)
export default class ImageController extends AbstractController {
  constructor(private readonly imageService: ImageService) {
    super();
  }

  @Post()
  // @UseInterceptors(FilesInterceptor('files'))
  @UseInterceptors(FilesInterceptor('files', 5, multerConfig))
  public uploadImage(
    @UploadedFiles() files: Express.Multer.File[],
    @Res() response: Response,
    @Param('category') category: string,
    @Param('name') name: string,
  ) {
    return this.handleRequest(response, {
      service: this.imageService,
      fn: 'uploadImage',
      args: [name, files],
    });
  }
}
