const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb+srv://xpado:d12m11t5r6@cluster0-udupc.mongodb.net/api?retryWrites=true&w=majority');

requireDir('./src/models');
const Product = mongoose.model('Product');

app.get("/", (req, res) => {
    Product.create({
        title: "teste 2",
        description: "desc",
        url: "teste.com"
    });
});

app.use('/api', require('./src/routes'));

app.listen(3333);