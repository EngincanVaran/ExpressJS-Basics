const http = require('http');

const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("This always runs!");
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send('<h1>Add Product Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log("In the middleware 2");
    // ... send response etc...
    res.send('<h1>Hello From Express!</h1>');
});

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);