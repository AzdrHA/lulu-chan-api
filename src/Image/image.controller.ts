import {
  Body,
  Controller,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { imageInterceptor } from 'src/Interceptor/image.interceptor';
import { ImageFormatRepository } from '../ImageFormat/image.format.repository';
import { CommandRepository } from '../Command/command.repository';

@Controller('image')
export class ImageController {
  private imageFormatRepository: ImageFormatRepository;
  private commandRepository: CommandRepository;

  constructor(
    imageFormatRepository: ImageFormatRepository,
    commandRepository: CommandRepository,
  ) {
    this.imageFormatRepository = imageFormatRepository;
    this.commandRepository = commandRepository;
  }

  @Post('/')
  @UseInterceptors(FilesInterceptor('images', null, imageInterceptor))
  public async uploadFile(
    @Res() res: Response,
    @Req() req: Request,
    @UploadedFiles() files: any,
    @Body() data: any,
  ) {
    // const image = this.imageFormatRepository.create(f);
    console.log(files);
    return res.status(200).json({
      t: 't',
    });
  }
}
