'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env;

const carsRouter = require('./app/routes/cars-routes');


app.use('/api/v1/cars/', carsRouter);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})