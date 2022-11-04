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
}

module.exports = new Entrega();
