import { HttpStatus, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): any {
    console.log(req);
    /* const bearerToken = (req.header('authorization') ?? '').split(' ')[1];

    if (!bearerToken)
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json(new HttpErrorByCode[HttpStatus.UNAUTHORIZED]());

    console.log(bearerToken);
    console.log('Request...'); */
    next();
  }
}
