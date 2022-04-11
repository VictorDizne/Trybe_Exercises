import { IRecord } from "../interfaces";
import { model as createModel, Schema, Document} from 'mongoose';
import MongoModel from "./Model";

interface RecordDocument extends IRecord, Document {}

const RecordSchema = new Schema<RecordDocument>({
  artist: String,
  title: String,
  format: String,
  yearPublished: Number,
  new: Boolean,
 });

class RecordsModel extends MongoModel<IRecord> {
  constructor(model = createModel('RecordStore', RecordSchema)) {
    super(model);
  }
}

export default RecordsModel;