const { entregaModel } = require('../models');

class Entrega {
  async createEntrega(bodyOfRequest) {
    try {
      const {
        name,
        deliveryDate,
        local_description,
        location_initial,
        location_final
      } = bodyOfRequest;

      const newEntrega = new entregaModel({
        name,
        deliveryDate,
        local_description,
        location_initial,
        location_final
      });

      const entrega = await newEntrega.save();

      return entrega;
    }
    catch (error) {
      throw new Error("Error in createEntrega: " + error.message);
    }
  }

  async listEntregas() {
    try {
      const entregas = await entregaModel.find();

      return entregas;
    }
    catch (error) {
      throw new Error("Error in listEntregas: " + error.message);
    }
  }

  async getEntregaById(id) {
    try {
      const entrega = await entregaModel.findById(id);

      return entrega;
    }
    catch (error) {
      throw new Error("Error in getEntregaById: " + error.message);
    }
  }
}

module.exports = new Entrega();
