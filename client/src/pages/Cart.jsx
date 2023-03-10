import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CartState } from "../Context";
import {toast} from  'react-toastify'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom'
import GooglePayButton from "@google-pay/button-react";

const Cart = () => {
  const navigate = useNavigate()
  const [items, setItem] = useState([]);
  const [user, setuser] = useState("");
  const { setCartItem } = CartState();
  const filteredCart = items.filter((item) => item.user === user._id);
  useEffect(() => {
    axios
      .get("http://localhost:7000/api/cart/")
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
 
setCartItem(filteredCart.length)
  }, [filteredCart.length, setCartItem]);

  useEffect(()=>{
    const User = JSON.parse(localStorage.getItem("userInfo"));
    setuser(User);
 
  },[navigate])
  let all = filteredCart.reduce((acc, curValue) => acc + curValue.price, 0);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:7000/api/cart/${id}`)
    .then((res)=>{
      console.log(res.data)
      toast.success('removed')
    })
    .catch((err)=>{
      console.log(err)
      toast.error('an error ocurred')
    })
  }
  
  return (
    <div>
      <br />
      
       <div className="btn btn-success but">total:: ${all}</div>
       <div className="google ">
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: `${all}`,
            currencyCode: "GHS",
            countryCode: "GH",
          },
          shippingAddressRequired: true,
          callbackIntents: ["PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log(paymentRequest);
        }}
        onPaymentAuthorized={paymentData =>{
          console.log('paymentData ' + paymentData);
          return { transactionState: 'SUCCESS'}
        }}
        existingPaymentMethodRequired='false'
        buttonColor="black"
        buttonType="buy"
      ></GooglePayButton>
      </div>
        
       
  
      <div className="carts">
       
        {filteredCart.map((res) => (
          <div className="" key={res._id}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250"
                  image={res.productImage}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" >
                    ${res.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {res.description}
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>deleteItem(res._id)}>Remove</Button>
 
                </CardActions>
              </Card>

          </div>
      
        ))}


      </div>
      <br />

     
    </div>
  );
};

export default Cart;
