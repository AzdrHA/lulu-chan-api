import { HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { ClientRepository } from './client.repository';
import { ClientEntity } from './client.entity';

@Injectable()
export class ClientService {
  private clientRepository: ClientRepository;

  constructor(clientRepository: ClientRepository) {
    this.clientRepository = clientRepository;
  }

  /**
   * @param {Request} request
   * @param {string} id
   * @return {Promise<void>}
   */
  public async get(request: Request, id: string): Promise<void> {
    const client = await this.clientRepository.findOne({ clientId: id });

    if (!client)
      request.res.status(HttpStatus.NOT_FOUND).json({
        error: `Client not found`,
      });

    request.res.status(HttpStatus.OK).json(client);
  }

  public async update(request: Request, id: string, newClient: ClientEntity) {
    const client = await this.clientRepository.findOne({ clientId: id });

    if (!client)
      request.res.status(HttpStatus.NOT_FOUND).json({
        error: `Client not found`,
      });

    console.log(newClient);
    if (newClient) {
      await this.clientRepository.update(client.id, newClient);
      request.res.json(newClient);
    }
    request.res.json(client);
  }
}
