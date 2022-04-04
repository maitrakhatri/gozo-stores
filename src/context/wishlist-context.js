import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { token } from "../utils/token";
import { wishlistReducer } from "../reducer/wishlist-reducer";

const WishlistContext = createContext();

function WishlistProvider({children}) {

  const [state, dispatch] = useReducer(wishlistReducer, {
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
    addToWishlist(token, state.product)
  }, [state.product])

  useEffect(() => {
    deleteFromWishlist(token, state.productId)
  }, [state.productId])

  return (
      <WishlistContext.Provider value={{ myWishlist, state, dispatch, productInWishlist}}>
          {children}
      </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export {useWishlist, WishlistProvider}