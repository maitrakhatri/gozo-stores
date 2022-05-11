import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useAuth } from "./index";

const WishlistContext = createContext();

function WishlistProvider({children}) {

  const [myWishlist, setMyWishlist] = useState([])
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate()

  const addToWishlist = async (token, product) => {
    if(isLoggedIn) {
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
    else {
      navigate('/login')
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

  const productInWishlist = (myWishlist, productId) => myWishlist.some((ele) => ele._id === productId)

  return (
      <WishlistContext.Provider value={{addToWishlist, deleteFromWishlist, myWishlist, productInWishlist}}>
          {children}
      </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export {useWishlist, WishlistProvider}