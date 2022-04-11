import { Model, Document } from 'mongoose';
import { IModel } from '../interfaces';

abstract class MongoModel<T> implements IModel<T> {
  constructor(protected model: Model<T & Document>) {}

  async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  async read(): Promise<T[]> {
    return this.model.find()
  }
}

export default MongoModel;