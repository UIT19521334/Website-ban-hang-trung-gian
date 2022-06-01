import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';

//routes
import userRoutes from './routes/auth.js';
import adminRoutes from './routes/admin/auth.js';
import categoryRoutes from './routes/category.js'

const app = express();

//enviroment variable or you can say constants
env.config();

//mongodb connection
//mongodb+srv://sfz:<password>@cluster0.c3klu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.c3klu.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Database connected');
    });

app.use(express.json());
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});