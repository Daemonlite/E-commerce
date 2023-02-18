import { useState, useEffect } from "react";
import axios from "axios";
import { CartState } from "../Context";
import { toast } from "react-toastify";


const Clothing = () => {
  const [product, setProduct] = useState([]);
  const [user,setuser]=useState("")
  const {setCartItem} = CartState()

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/products/")
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = product.filter((res) => res.category === "Clothing");

  useState(() => {
    const User = JSON.parse(localStorage.getItem("userInfo"));
    setuser(User);
    
  }, []);


  const addCart = (res) => {
   
    axios.post('http://localhost:7000/api/cart/',{
       productName:res.productName, 
       price:res.price,
       description:res.description, 
       productImage:res.image1,
       user:user._id
    })
    .then((res)=> {
      console.log(res.data)
      toast.success("added to cart")
      // setCartItem(prevState=>prevState + 1)
    })
    .catch((err)=> {
      console.log(err)
      toast.error("an error occurred")
    })
    
  }


  return (
    <>
      <div className="img"></div>
      <div className="prods">
        {filteredProducts.map((res) => (
          <>
            <div key={res._id}>
              <div>
                <br />
                <div className="prod">
                  <img src={res.image1} alt="clothing" className="prod-image" />

                  <div className="tin">
                    <div className="prod-descr">{res.description}</div>
                    <br />
                    <div className="infos">
                      <div className="info">${res.price}</div>
                      <div className="info">{res.stock} In-Stock</div>

                      <button
                        className="add btn btn-primary"
                        onClick={()=> addCart(res) }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
       
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Clothing;
