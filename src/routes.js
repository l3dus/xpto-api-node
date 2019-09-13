const express = require('express');

const routes = express.Router();

const ProdctController = require('./controllers/ProductController');
const UsersController = require('./controllers/UsersController');

routes.get('/products', ProdctController.index);
//routes.get('/users', UsersController.load);
routes.post('/users', UsersController.store);

module.exports = routes;