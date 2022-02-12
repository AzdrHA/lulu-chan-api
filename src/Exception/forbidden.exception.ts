import { Exception } from './Exception';
import { HttpStatus } from '@nestjs/common';

export class ForbiddenException extends Exception {
  constructor(content?: string) {
    super(
      content ?? 'Access unautorized for this resource',
      HttpStatus.FORBIDDEN,
    );
  }
}
