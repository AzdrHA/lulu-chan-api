import { HttpException, HttpStatus } from '@nestjs/common';

export class Exception extends HttpException {
  constructor(content: string, status: HttpStatus) {
    super(
      {
        status: status,
        error: content,
      },
      status,
    );
  }
}
