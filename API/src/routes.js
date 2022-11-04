const routes = require('express').Router();

const { entregaControler } = require('./controllers');

routes.post('/delivery', entregaControler.createEntrega);
routes.get('/delivery', entregaControler.listEntregas);
routes.get('/delivery/:id', entregaControler.getEntregaById);

routes.put('/delivery/:id', entregaControler.updateEntrega);

routes.delete('/delivery/:id', entregaControler.deleteEntrega);

module.exports = routes;
