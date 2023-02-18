const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productName: {
    type: String,
    require:true,
  },
  price:{
    type: Number,
    require: true,
  },
  description:{
    type: String,
    require:true
  },
  quantity: {
    type: Number,
    default: 1,
    required:false
  },
  productImage:{
    type: String,
    
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Cart", CartSchema);
