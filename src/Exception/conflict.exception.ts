import { Exception } from './Exception';
import { HttpStatus } from '@nestjs/common';

export class ConflictException extends Exception {
  constructor(content?: string) {
    super(content ?? 'This data is already saved', HttpStatus.CONFLICT);
  }
}
