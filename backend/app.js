const express = require('express');
const errorMiddleware = require('./middleware/error');

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Route Imports
const product = require('./routes/productRoute');
app.use('/api/v1', product); 

// Middleware for error
app.use(errorMiddleware);

module.exports = app;