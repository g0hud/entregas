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

  async updateEntrega(bodyOfRequest) {
    try {
      const {
        id,
        name,
        deliveryDate,
        local_description,
        location_initial,
        location_final
      } = bodyOfRequest;

      const entrega = await entregaModel.findByIdAndUpdate(id, {
        name,
        deliveryDate,
        local_description,
        location_initial,
        location_final
      },
      {
        new: true
      });

      return entrega;
    }
    catch (error) {
      throw new Error("Error in updateEntrega: " + error.message);
    }
  }

  async deleteEntrega(id) {
    try {
      const entrega = await entregaModel.findByIdAndRemove(id);

      return entrega;
    }
    catch (error) {
      throw new Error("Error in deleteEntrega: " + error.message);
    }
  }
}

module.exports = new Entrega();
