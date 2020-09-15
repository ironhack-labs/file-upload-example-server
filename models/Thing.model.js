const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const thingSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

module.exports = model('Thing', thingSchema);
