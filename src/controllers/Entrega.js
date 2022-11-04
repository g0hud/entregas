const {entregaService} = require('../services')

class Entrega {
  async createEntrega(req, res) {
    try {
      const bodyRequest = req.body;
      const entrega = await entregaService.createEntrega(bodyRequest);
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
      const { id } = req.params;
      const entrega = await entregaService.getEntregaById(id);
      return res.status(200).send(entrega);
    }
    catch (error) {
      return res.status(500).send({error: error.message});
    }
  }

  async updateEntrega(req, res) {
    try {
      const bodyRequest = req.body;
      bodyRequest.id = req.params.id;

      const entrega = await entregaService.updateEntrega(bodyRequest);
      return res.status(200).send(entrega);
    }
    catch (error) {
      return res.status(500).send({error: error.message});
    }
  }

  async deleteEntrega(req, res) {
    try {
      const { id } = req.params;
      const entrega = await entregaService.deleteEntrega(id);
      return res.status(200).send(entrega);
    }
    catch (error) {
      return res.status(500).send({error: error.message});
    }
  }
}

module.exports = new Entrega();
