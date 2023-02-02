const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required: true,
  },
  image1 : {
    type: String,
    required:true
  },
  image2 : {
    type: String,
  },
  category: {
    type:String,
    required:true,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
