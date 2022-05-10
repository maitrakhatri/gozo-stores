import { createContext, useContext, useState } from "react";
import axios from "axios"
import { useAuth } from "./index";
import { useNavigate } from "react-router-dom"

const CartContext = createContext();

function CartProvider({children}) {

    const [myCart, setMyCart] = useState([]);
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const addToCart = async (token, product) => {
      if(isLoggedIn) {
        try {
          const res = await axios.post('/api/user/cart', {product}, {
            headers: {
              authorization: token
            }
          })
          setMyCart(res.data.cart)
        }
    
        catch(err) {
          console.log(err)
        }
      }
      else {
        navigate('/login')
      }
    }

    const deleteFromCart = async (token, productId) => {
        try {
          const res = await axios.delete(`/api/user/cart/${productId}`, {
            headers: {
              authorization: token
            }
          })
          setMyCart(res.data.cart)
        }
      
        catch(err) {
          console.log(err)
        }
    }

    const updateCartQuantity = async (token, productId, updateType) => {
      try {
        const res = await axios.post(`/api/user/cart/${productId}`, {
          action: {
            type: updateType,
          }
        }, {
          headers: {
            authorization: token
          }
        })
        setMyCart(res.data.cart)
      }
    
      catch(err) {
        console.log(err)
      }
    }

    const productInCart = (myCart, productId) => myCart.some((ele) => ele._id === productId)

    return (
        <CartContext.Provider value={{myCart, deleteFromCart, addToCart, updateCartQuantity, productInCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {useCart, CartProvider}
