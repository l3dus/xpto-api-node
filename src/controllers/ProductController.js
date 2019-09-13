const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        Product.create({
            title: "teste 2",
            description: "desc",
            url: "teste.com"
        });
    }
};