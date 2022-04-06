import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://localhost:27017/dbTest') =>
  mongoose.connect(mongoDatabaseURI);

export default connection;