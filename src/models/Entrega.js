const {Schema, model} = require('mongoose');

const EntregaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  },
  local_description: {
    type: String,
    required: true
  },
  location_initial: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  location_final: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  }
},{
  timestamps: true,
  versionKey: false
});

module.exports = model('Entrega', EntregaSchema);