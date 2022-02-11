import { Body, Controller, Get, Param, Put, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ClientService } from './client.service';
import { ClientEntity } from './client.entity';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  private clientService: ClientService;
  constructor(clientService: ClientService) {
    this.clientService = clientService;
  }

  @Get('/:id')
  public get(@Req() request: Request, @Param('id') id: string) {
    return this.clientService.get(request, id);
  }

  @Put('/:id')
  public update(
    @Req() request: Request,
    @Param('id') id: string,
    @Body() client: ClientEntity,
  ) {
    return this.clientService.update(request, id, client);
  }
}
