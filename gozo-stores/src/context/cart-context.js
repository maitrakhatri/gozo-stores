import { createContext, useContext, useState } from "react";
import axios from "axios"

const CartContext = createContext();

function CartProvider({children}) {

    const [myCart, setMyCart] = useState([])

    const addToCart = async (token, product) => {
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

    return (
        <CartContext.Provider value={{myCart, deleteFromCart, addToCart, updateCartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {useCart, CartProvider}
