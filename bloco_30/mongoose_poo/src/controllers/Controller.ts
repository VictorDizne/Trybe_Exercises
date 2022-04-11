import Service from '../services/Service';
import { Request, Response } from 'express';

abstract class Controller<T> {
  abstract route: string;

  constructor(protected service: Service<T>) {}

  abstract create(req: Request, res: Response): any

  abstract read(_req: Request, res: Response): any
}

export default Controller;