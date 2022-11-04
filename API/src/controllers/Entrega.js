const {entregaService} = require('../services')

class Entrega {
  async createEntrega(req, res) {
    try {
      const entrega = await entregaService.createEntrega(req.body);
      return res.status(201).send(entrega);
    }
    catch (error) {
      return res.status(400).send({error: error.message});
    }
  }
}

module.exports = new Entrega();
