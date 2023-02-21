const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const port = process.env.PORT
const connectDb = require('./database/connect')
const stripe = require('stripe')(process.env.STRIPE_KEY);


connectDb()
// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));


const domain = 'http://localhost:7000';
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${domain}?success=true`,
      cancel_url: `${domain}?canceled=true`,
    });
  
    res.redirect(303, session.url);
  });

app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/products',require('./routes/productRoutes'))
app.use('/api/cart',require('./routes/cartRoutes'))
app.use('/api/shipping',require('./routes/shippingRoutes'))
app.use('/api/category',require('./routes/categoryRoutes'))

app.listen(port,()=>console.log(`SERVER ACTIVE ON PORT ${port}`))