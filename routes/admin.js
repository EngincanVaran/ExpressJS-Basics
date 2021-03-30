const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// only fire when the req is POST, GET, DELETE, PATCH

// /admin/add-product ==> GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: "Add Product",
        path: '/admin/add-product',
        activeProduct: true,
        productCSS: true,
        formCSS: true,
    })
    // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product ==> POST
router.post("/add-product", (req, res, next) => {
    products.push({title: req.body.title })
    res.redirect("/");
});

exports.router = router;
exports.products = products;