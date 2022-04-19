import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import bodyParser from 'body-parser';

//routes
import userRoutes from './routes/auth.js';
import adminRoutes from './routes/admin/auth.js';

const app = express();

//enviroment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://sfz:<password>@cluster0.c3klu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.c3klu.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Database connected');
    });

app.use(bodyParser());
app.use('/api', userRoutes);
app.use('/api', adminRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});