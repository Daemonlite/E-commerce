const Cart = require("../models/cartModel");
const User = require("../models/userModel");
const Product = require("../models/productsModel")

const getCart = async (req, res) => {
  const cart = await Cart.find({}).exec();
  if (!cart) {
    return res.status(404).json({ message: "No items in cart" });
  } else {
    res.status(200).json(cart);
  }
};



const addCart = async (req, res) => {
  const { product, quantity, total, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const cart = new Cart({
    product,
    quantity,
    total,
    user,
  });

  try {
    
    await cart.save()
    existingUser.cart.unshift(cart)
    await existingUser.save()
 } catch (error) {
     console.log(error)
     res.status(400).json({error:error})
 }
 return res.status(201).json(cart)
};

const deleteCart = async (req,res,next) => {
  const id = req.params.id;

  let cart;
  try {
    cart = await Cart.findOneAndDelete({_id: id})
    await User.updateOne({_id: cart.user}, {$pull: {cart: {_id: cart._id}}});
  } catch (err) {
    console.log(err);
  }
  if (!cart) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Deleted" })
}


module.exports = {
    getCart,
    addCart,
    deleteCart
};
