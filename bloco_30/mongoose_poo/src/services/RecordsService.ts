import { IRecord } from "../interfaces";
import RecordsModel from "../models/RecordsModel";
import Service from "./Service";

class RecordsService extends Service<IRecord> {
  constructor(model = new RecordsModel()) {
    super(model);
  }

  async create(obj: IRecord) {
    if (obj.artist === undefined) {
      return { code: 401, message: 'Artist is required' };
    }

    if (obj.format === undefined) {
      return { code: 401, message: 'Format is required' };
    }

    if (obj.new === undefined) {
      return { code: 401, message: 'New is required' };
    }

    if (obj.title === undefined) {
      return { code: 401, message: 'Title is required' };
    }

    if (obj.yearPublished === undefined) {
      return { code: 401, message: 'yearPublished is required' };
    }


    return this.model.create(obj);
  }
}

export default RecordsService;