import { Request, Response } from 'express';
import { IRecord } from '../interfaces';
import RecordsService from '../services/RecordsService';
import Controller from './Controller';

class RecordsController extends Controller<IRecord> {
  private _route: string

  constructor(
    service = new RecordsService(),
    route = '/records'
    ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route };

  read = async (req: Request, res: Response) => {
    const records = await this.service.read();

    return res.status(200).json(records);
  }

  create = async (req: Request, res: Response) => {
    const { body } = req;
    const created = await this.service.create(body);
    if ('code' in created) {
      return res.status(created.code).json(created.message);
    }

    return res.status(201).json(created);
  }
}

export default RecordsController;