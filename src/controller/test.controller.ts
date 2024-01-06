import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('/test')
export class TestController {
  @Get('/ping')
  public async test(@Res() res: Response) {
    res.send('pong');
  }
}
