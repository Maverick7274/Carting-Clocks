import mongoose from "mongoose";


const connectDB = async (URI: any) => {
    mongoose.Promise = Promise;
    mongoose.connect(URI)
    mongoose.connection.on('error', (error: Error) => console.log(error));
    mongoose.connection.once('open', () => console.log('Connected to database'));
}

export default connectDB;