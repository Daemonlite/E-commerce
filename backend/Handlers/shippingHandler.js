const Shipping = require('../models/shippingModel')

const getAddresses = async (req, res) => {
    const ship = await Shipping.find({}).exec();
    if (!ship) {
      return res.status(404).json({ message: "No Product found  found" });
    } else {
      res.status(200).json(ship);
    }
  };

const addShippingInfo = async (req,res) => {
    const {fullName,email,address,city,country,zipCode} = req.body

    if(!fullName || !email || !address || !city || !country ||zipCode){
        return res.status(400).json({message:"add required fields "})
    }

    const info =   Shipping.create({
        fullName,email,address,city,country,zipCode
    })

   if(info){
    res.status(201).json(info)
   }else{
   return res.status(400).json({message:"an error ocurred"})
   }
   
}

module.exports = {
    getAddresses,
    addShippingInfo
}