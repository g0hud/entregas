const routes = require('express').Router();

const { entregaControler } = require('./controllers');

routes.post('/delivery', entregaControler.createEntrega);
routes.get('/delivery', entregaControler.listEntregas);
routes.get('/delivery/:id', entregaControler.getEntregaById);

module.exports = routes;
