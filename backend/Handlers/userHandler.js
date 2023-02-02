const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer')


const getUsers = async (req,res,next) => {
  let users;
  try {
    users = await User.find()
  } catch (error) {
    console.log(error)
  }
  if(!users){
    res.status(404).json({message:'no user found'})
  }
  
  return res.status(200).json(users)
}
const register = async (req, res, next) => {
    const {
      username,
      email,
      password,
      img,
      recover
     
      
    } = req.body;
  
    if (!username || !email || !password) {
      res.status(400).json({ message: "Please add all fields" });
    }
  
    //check if user exists
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400)
      return res.json("user already exists");
    }
  
  
    //hashpassord
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    //createUser
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      img

    })
  
    if(user){
      res.status(201).json(user);
    } else {
      res.status(400).json({message:"invalid user credentials"});
    }
    const { id, isAdmin } = user;
const token = jwt.sign({ username, id, isAdmin }, process.env.SECRET, {
  expiresIn: "2d",
});
  }


const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  !user && res.status(400).json("user cant be found");
  if (user && (await bcrypt.compare(password, user.password))) {
    const { username, id, isAdmin } = user;
    const token = jwt.sign({ username, id, isAdmin }, process.env.SECRET, {
      expiresIn: "2d",
    });

    res.status(200).json({
      ...user._doc,
      token,
    });
  } else {
    res.status(400).json("invalid user credentials");
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: "2d",
  });
};

const updateUserInfo = async (req,res) => {
  const userId = req.params.id;
  const updatedInfo = req.body;

  const upUserInfo = await User.findByIdAndUpdate(userId ,updatedInfo, { new: true });

  if (!upUserInfo) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(upUserInfo);
}

const resetPasswordCode = async (req,res) => {
  const {email,recover} = req.body
  const user = User.findOne({email})
  if(!user || !email){
    res.status(404).json({message:"Email not found"})
  }else{
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: 'paakwesinunoo135@gmail.com',
        pass: process.env.PASSWORD
      }
    });
  
    const codes = [
      {
        code:34567,

      },
      {
        code:89463
      },
      {
        code:38021,
      },
      {
        code:2234,
      },
      {
        code:4467,
      },
      {
        code:5465,
      },
      {
        code:9097,
      },
    ]
    const rand = Math.floor(Math.random()* codes.length)
    const num = codes[rand].code
    console.log(num)
    const mailOptions = {
      from: 'paakwesinunoo135@gmail.com',
      to: `${email}`,
      subject: 'password recovery',
      html: `<p>Input code to verify email and recover account : ${num}</p>`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
     console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        
      }
    });

    if(recover === num){
    res.status(201).json({message:"email verified"})
    }else{
      res.status(40).json({message:"Incorrect verification code"})
    }
  }

}
const deleteUser = async (req,res) => {
  const  userId = req.params.id;

  const user = await User.findByIdAndDelete(userId);

  if (!user ) {
    return res.status(404).json({ message: "user   not found" });
  }

  res.status(200).json({ message: "user  deleted successfully" });
}
module.exports = {
  getUsers,
  register,
  loginUser,
  updateUserInfo,
  resetPasswordCode,
  deleteUser
};
