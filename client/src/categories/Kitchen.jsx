import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Kitchen = () => {
    const [product, setProduct] = useState([]);
    const [user, setuser] = useState("");
  
  
    useEffect(() => {
      axios
        .get("http://localhost:7000/api/products/")
        .then((res) => setProduct(res.data))
        .catch((error) => console.log(error));
    }, []);
  
    const filteredProducts = product.filter((res) => res.category === "Kitchen");
  
    useState(() => {
      const User = JSON.parse(localStorage.getItem("userInfo"));
      setuser(User);
    }, []);
  
    const addCart = (res) => {
   
      axios
        .post("http://localhost:7000/api/cart/", {
          productName: res.productName,
          price: res.price,
          description: res.description,
          productImage: res.image1,
          user: user._id,
        })
        .then((res) => {
          console.log(res.data);
          toast.success("added to cart");
          // setCartItem(prevState=>prevState + 1)
        })
        .catch((err) => {
          console.log(err);
          toast.error("an error ocurred");
        });
    };
  return (
    <div>
         <>
      <br />
      <div className="prods">
        {filteredProducts.map((res) => (
          <div key={res._id}>
            <>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250"
                  image={res.image1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ${res.price} {res.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {res.description}
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  {user && <Button size="small" onClick={()=>addCart(res)}>Add Cart</Button>}
                  <Button size="small">view More</Button>
                </CardActions>
              </Card>
            </>
          </div>
        ))}
      </div>
    </>
    </div>
  )
}

export default Kitchen