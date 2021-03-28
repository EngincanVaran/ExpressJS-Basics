const path = require("path");

const bodyParser = require("body-parser");

const express = require('express');

const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));
// static public folders such as css etc...
app.use(express.static(path.join(__dirname, 'public')));

// DONT FORGET ORDER MATTER WHEN app.use()!!!
app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);