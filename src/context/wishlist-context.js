import { createContext, useContext, useState } from "react";
import axios from "axios";

const WishlistContext = createContext();

function WishlistProvider({children}) {

  const [myWishlist, setMyWishlist] = useState([])
  const addToWishlist = async (token, product) => {
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
  const deleteFromWishlist = async (token, productId) => {
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
  return (
      <WishlistContext.Provider value={{addToWishlist, deleteFromWishlist, myWishlist}}>
          {children}
      </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export {useWishlist, WishlistProvider}