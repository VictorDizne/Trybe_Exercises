import mongoose from "mongoose";

const connection = async (mongoDatabaseURI = 'mongodb://127.0.0.1:27017/TrybeStore') => {
  const aaa = await mongoose.connect(mongoDatabaseURI);
  console.log(mongoose.connection.readyState);
  return aaa;
}
  



export default connection