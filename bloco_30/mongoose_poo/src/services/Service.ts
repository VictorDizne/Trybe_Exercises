import { CodeAndMessage, IRecord } from './../interfaces';
import { IModel } from "../interfaces";

abstract class Service<T> {
  constructor(protected model: IModel<T>) {}

  abstract create(obj: IRecord): Promise<IRecord | CodeAndMessage>

  public async read() {
    return this.model.read()
  }
}

export default Service;
