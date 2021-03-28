const http = require('http');
const bodyParser = require("body-parser");

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    // console.log("This always runs!");
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// only fire when the req is POST, GET, DELETE, PATCH
app.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use('/', (req, res, next) => {
    // console.log("In the middleware 2");
    // ... send response etc...
    res.send('<h1>Hello From Express!</h1>');
});

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);