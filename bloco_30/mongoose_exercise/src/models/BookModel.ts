import { model as createModel } from 'mongoose';
import { BookSchema, IBook, IMovie, MovieSchema } from '../schemas/BookSchema';

class BookModel {
  /*
    Criamos no construtor um model do Mongoose do tipo IBook, passando pro createModel(model do Mongoose) um nome e o schema de referência.
  */

  constructor(
    private bookModel = createModel<IBook>('books', BookSchema),
    private moviesModel = createModel<IMovie>('movies', MovieSchema)
    ) {} 

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.moviesModel.find({}, { _id: 0 });
    return movies;
  }
}

export default BookModel;