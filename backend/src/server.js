const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./Routers/userRoute');


dotenv.config({path: __dirname + '/config/config.env'});

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);


connectDB(process.env.MONGO_URI);


app.listen(
    process.env.PORT || 4000, () => {
        console.log(`Server is running on port http://localhost:${process.env.PORT}/`);
    }

)