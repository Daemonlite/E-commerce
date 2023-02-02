const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT
const connectDb = require('./database/connect')


connectDb()
// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/products',require('./routes/productRoutes'))
app.use('/api/cart',require('./routes/cartRoutes'))
app.use('/api/shipping',require('./routes/shippingRoutes'))
app.use('/api/category',require('./routes/categoryRoutes'))

app.listen(port,()=>console.log(`SERVER ACTIVE ON PORT ${port}`))