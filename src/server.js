'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


const PORT = process.env.PORT || 4000;

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const foodRoute = require('./routes/food');
const clothesRoute = require('./routes/clothes');
const logger = require('./middleware/logger');
app.use(logger);
const { request, response } = require('express');



let homeHandler = (request, response) => {
    response.json('Welcome to home page 3 ');
}

let startServer = () => {
    app.listen(PORT, () => {
        console.log(`server is listening to port ${PORT}`);
    });
};

app.get('/', homeHandler);
app.use('/api/v1/food', foodRoute);
app.use('/api/v1/clothes', clothesRoute);
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    startServer: startServer,
};
