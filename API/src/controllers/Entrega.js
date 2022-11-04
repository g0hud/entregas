const {entregaService} = require('../services')

class Entrega {
  async createEntrega(req, res) {
    try {
      const entrega = await entregaService.createEntrega(req.body);
      return res.status(201).send(entrega);
    }
    catch (error) {
      return res.status(500).send({error: error.message});
    }
  }

  async listEntregas(req, res) {
    try {
      const entregas = await entregaService.listEntregas();
      return res.status(200).send(entregas);
    }
    catch (error) {
      return res.status(500).send({error: error.message});
    }
  }

  async getEntregaById(req, res) {
    try {
      const entrega = await entregaService.getEntregaById(req.params.id);
      return res.status(200).send(entrega);
    }
    catch (error) {
      return res.status(500).send({error: error.message});
    }
  }
}

module.exports = new Entrega();
