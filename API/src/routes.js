const routes = require('express').Router();

const { entregaControler } = require('./controllers');

routes.post('/delivery', entregaControler.createEntrega);

module.exports = routes;
