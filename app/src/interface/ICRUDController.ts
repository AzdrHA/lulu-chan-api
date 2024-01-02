import { Response } from 'express';

export interface ICRUDController<T> {
  create(response: Response, body: T): unknown;
  read(response: Response, id: number): unknown;
  update(response: Response, id: number, body: T): unknown;
  delete(response: Response, id: number): unknown;
}
