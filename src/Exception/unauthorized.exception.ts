import { Exception } from './Exception';
import { HttpStatus } from '@nestjs/common';

export class UnauthorizedException extends Exception {
  constructor(content?: string) {
    super(
      content ?? 'Access unautorized for this resource',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
