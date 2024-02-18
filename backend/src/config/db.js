const mongoose = require('mongoose');

const connectDB = async (URI) => {
    mongoose.Promise = Promise;
    mongoose.connect(URI)
    mongoose.connection.on('error', (error) => console.log(error));
    mongoose.connection.once('open', () => console.log('Connected to database'));
}

module.exports = connectDB;