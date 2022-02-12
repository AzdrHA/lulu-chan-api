import { Exception } from './Exception';
import { HttpStatus } from '@nestjs/common';

export class NotFoundException extends Exception {
  constructor(content?: string) {
    super(content ?? 'This resource is not found', HttpStatus.NOT_FOUND);
  }
}
