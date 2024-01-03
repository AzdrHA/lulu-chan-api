import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  public validateRequest(request: Request): boolean {
    const bearerToken = (request.header('authorization') ?? '').split(' ')[1];
    if (!bearerToken || bearerToken !== process.env.TOKEN_APP)
      request.res.status(HttpStatus.UNAUTHORIZED).json({
        status: HttpStatus.UNAUTHORIZED,
        message: 'Unauthorized',
      });
    return true;
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    return this.validateRequest(request);
  }
}
