const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("In the middleware");
    next(); // allows req to continue to next middleware
});

app.use((req, res, next) => {
    console.log("In the middleware 2");
    // ... send response etc...
});

const server = http.createServer(app);

server.listen(3000);