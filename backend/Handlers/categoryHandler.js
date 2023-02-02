const Category = require("../models/categoryModel");

const getCategory = async (req,res) => {
    const cat = await Category.find({category:Category})

    if(!cat){
        return res.status(404).json({message:"category not found"})
    }else{
        return res.status(200).json(cat)
    }
}
const addCategory = async(req,res) => {
    const {name,categoryImage} = req.body

    if(!name || !categoryImage){
        res.status(400).json({message:"fill reuired fields"})
    }

    const add = await Category.create({
        name,
        categoryImage
    })

    if(add){
        res.status(201).json(add)
    }else{
        res.status(400).json({message:"error"})
    }
}

module.exports = {
    getCategory,
    addCategory
}