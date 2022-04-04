import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { token } from "../utils/token";
import { wishlistReducer } from "../reducer";

const WishlistContext = createContext();

export function WishlistProvider({children}) {

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    product: null,
    productId: null
  })

  const [myWishlist, setMyWishlist] = useState([])

  const addToWishlist = async (token, product) => {
    if(product !== null) {
      try {
        const res = await axios.post('api/user/wishlist', {product}, {
          headers: {
            authorization: token
          }
        })
        setMyWishlist(res.data.wishlist)
      }
  
      catch(err) {
        console.log(err)
      }
    } 
  }

  const deleteFromWishlist = async (token, productId) => {
    if(productId !== null) {
      try {
        const res = await axios.delete(`/api/user/wishlist/${productId}`, {
          headers: {
            authorization: token
          }
        })
        setMyWishlist(res.data.wishlist)
      }
    
      catch(err) {
        console.log(err)
      }
    }
  }

  const productInWishlist = (myWishlist, productId) => myWishlist.some((ele) => ele._id === productId)

  useEffect(() => {
    addToWishlist(token, wishlistState.product)
  }, [wishlistState.product])

  useEffect(() => {
    deleteFromWishlist(token, wishlistState.productId)
  }, [wishlistState.productId])

  return (
      <WishlistContext.Provider value={{ myWishlist, wishlistDispatch, productInWishlist}}>
          {children}
      </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
