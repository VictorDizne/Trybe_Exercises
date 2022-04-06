import { Schema } from 'mongoose';

export interface IBook {
  title: string;
  author: string;
  publishedYear: number;
  weight?: string;
}

export interface IMovie {
  title: string;
  releaseYear: number;
}

export const MovieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  releaseYear: { type: Number, required: true }
})

export const BookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: false },
  weight: { type: String, required: false }
});