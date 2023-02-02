const Product = require("../models/productsModel");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  const products = await Product.find({}).exec();
  if (!products) {
    return res.status(404).json({ message: "No Product found  found" });
  } else {
    res.status(200).json(products);
  }
};



const addProduct = async (req, res) => {
  const { productName, description, price, image1, image2, category, stock } =
    req.body;

  if (
    !productName ||
    !description ||
    !price ||
    !image1 ||
    !category ||
    !stock
  ) {
    res.status(400).json({ message: "please add required fields" });
  }
  const added = await Product.create({
    productName,
    description,
    price,
    image1,
    image2,
    category,
    stock,
  });

  if(!added){
    return res.status(400).json({message:"unable to add product"})
  }else{
    return res.status(201).json(added)
  }

  
};


const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;

  const upproduct = await Product.findByIdAndUpdate(productId,updatedProduct, { new: true });

  if (!upproduct) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  res.status(200).json(upproduct);
};


const deleteProduct = async (req, res, next) => {
  const productId = req.params.id;

  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    return res.status(404).json({ message: "Product  not found" });
  }

  res.status(200).json({ message: "Product deleted successfully" });
};








module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
