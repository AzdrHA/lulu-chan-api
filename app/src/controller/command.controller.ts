import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import AbstractController from '../abstract/AbstractController';
import CommandService from '../service/command.service';
import { Response } from 'express';
import { CommandModel } from '../model/command.model';

@Controller('/command')
export class CommandController extends AbstractController {
  constructor(private readonly commandService: CommandService) {
    super();
  }

  @Post()
  @UsePipes(new ValidationPipe({ groups: ['create'] }))
  public create(@Res() response: Response, @Body() body: CommandModel) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'createOrUpdate',
      args: [body],
    });
  }

  @Get('/:id')
  public read(@Res() response: Response, @Param('id') id: number) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'read',
      args: [id],
    });
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe({ groups: ['create'] }))
  public update(
    @Res() response: Response,
    @Param('id') id: number,
    @Body() data: CommandModel,
  ) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'createOrUpdate',
      args: [data, id],
    });
  }

  @Delete('/:id')
  public delete(@Res() response: Response, @Param('id') id: number) {
    return this.handleRequest(response, {
      service: this.commandService,
      fn: 'delete',
      args: [id],
    });
  }
}
