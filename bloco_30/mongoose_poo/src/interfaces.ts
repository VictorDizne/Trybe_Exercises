export interface IModel<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
}

export interface CodeAndMessage {
  code: number,
  message: string,
}

export interface IRecord {
  artist: string,
  title: string,
  format: string,
  yearPublished: number,
  new: boolean,
}
