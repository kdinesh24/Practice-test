const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Import only once

const app = express();
app.use(express.json());

const port = process.env.PORT || 8000;

app.use('/api', userRoutes); //

connectDB();

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
