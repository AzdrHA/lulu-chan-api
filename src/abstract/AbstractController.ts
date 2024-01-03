import { Response } from 'express';
import ApiException from '../exception/api.exception';
import { EntityNotFoundError } from 'typeorm';

export default abstract class AbstractController {
  public async handleRequest(
    response: Response,
    args: {
      service: unknown;
      fn: string;
      args?: unknown[];
    },
  ): Promise<void> {
    const service = args['service'];
    const fn = args['fn'] ?? null;
    const fnArgs = args['args'] ?? [];

    if (!service && !fn) throw new ApiException('Aucun service demandé');

    try {
      const result = await service[fn](...fnArgs);
      response.status(200).json(result);
    } catch (e) {
      if (e instanceof ApiException)
        response.status(e.status).json({
          message: e.message,
          status: e.status,
        });
      if (e instanceof EntityNotFoundError) {
        response.status(404).json({
          message: 'entity not found',
          status: 404,
        });
      }
      response.status(500).json({
        message: 'Une erreur est survenue',
        status: 500,
        error: e.message,
      });
    }
  }
}
