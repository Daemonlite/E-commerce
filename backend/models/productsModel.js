const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require:true
  },
  price: {
    type: Number,
    require: true,
  },
  image1 : {
    type: String,
    require:true
  },
  image2 : {
    type: String,
  },
  category: {
    type:String,
    require:true,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
