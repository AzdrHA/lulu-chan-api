import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { CommandRepository } from '../repository/command.repository';
import { Observable } from 'rxjs';
import { Request } from 'express';
import ApiException from '../exception/api.exception';

@Injectable()
export class ValidationInterceptor implements NestInterceptor {
  constructor(private readonly commandRepository: CommandRepository) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<Request>();

    const { category, name } = request.params;
    const checkCommand = await this.commandRepository.findCommandByName(name);
    if (!checkCommand) throw new ApiException('Command not found', 404);
    if (checkCommand.category.name !== category)
      throw new ApiException('Command not found', 404);

    return next.handle();
  }
}
