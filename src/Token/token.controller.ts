import { Controller, Param, Post, Req, Res } from '@nestjs/common';
import { TokenService } from './token.service';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Auth } from '../Auth/auth.decorator';

@ApiTags('token')
@Controller('token')
export class TokenController {
  private tokenService: TokenService;

  constructor(tokenService: TokenService) {
    this.tokenService = tokenService;
  }

  @Post('/user/:id/generate')
  @Auth('fjqdjgidos')
  public generateToken(
    @Param('id') id: number,
    @Req() request: Request,
    @Res() response: Response,
  ) {
    return this.tokenService.generateToken(request, response, id);
  }
}
