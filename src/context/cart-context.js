import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from "axios"
import { cartReducer } from "../reducer/cart-reducer";
import {token} from "../utils/token"

const CartContext = createContext();

function CartProvider({children}) {

    const [myCart, setMyCart] = useState([])

    const addToCart = async (token, product) => {
      if(product !== null) {
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
    }

    const deleteFromCart = async (token, productId, deleteProduct) => {
      if(productId !== null && deleteProduct===true) {
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
    }

    const updateCartQuantity = async (token, productId, updateType) => {
      if(productId !== null) {
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
    }

    const productInCart = (myCart, productId) => myCart.some((ele) => ele._id === productId)

    const [state, cartDispatch] = useReducer(cartReducer, {
      product: null,
      productId: null,
      deleteProduct: false,
      updateType: null,
      adder: false,
      deleter: false,
      updater: false
    })

    useEffect(() => {
      addToCart(token, state.product)
    }, [state.adder])

    useEffect(() => {
      deleteFromCart(token, state.productId, state.deleteProduct)
    }, [state.deleter])

    useEffect(() => {
      updateCartQuantity(token, state.productId, state.updateType)
    }, [state.updater])

    return (
        <CartContext.Provider value={{myCart, cartDispatch, state, productInCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export {useCart, CartProvider}
