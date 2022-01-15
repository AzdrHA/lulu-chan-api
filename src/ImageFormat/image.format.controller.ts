import { Body, Controller, Delete, Param, Post, Req } from '@nestjs/common';
import { ImageFormatService } from './image.format.service';
import { Request } from 'express';
import { ImageFormatEntity } from './image.format.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Image')
@Controller('/image/format')
export class ImageFormatController {
  private imageFormatService: ImageFormatService;
  constructor(imageFormatService: ImageFormatService) {
    this.imageFormatService = imageFormatService;
  }

  @Post('/')
  public async createFormat(
    @Req() request: Request,
    @Body() data: ImageFormatEntity,
  ) {
    return this.imageFormatService.createFormat(request, data);
  }

  @Delete('/:id')
  public async deleteFormat(@Req() request: Request, @Param('id') id: number) {
    return this.imageFormatService.deleteFormat(request, id);
  }
}
