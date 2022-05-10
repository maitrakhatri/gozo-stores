import "./css/wishlist.css"
import {Navbar, Card, Toast} from "../components"
import { useWishlist,useAuth } from "../context"
import { useEffect } from "react"

export function Wishlist() {

    const {myWishlist} = useWishlist()
    const {showToast} = useAuth()

    useEffect(() => {
        document.title = "Wishlist | gozo Stores";
    },[])

    return (
        <div className="wishlist">

            <Navbar />
            {showToast && <Toast title="Logged In successfully !!" />}
            <main className="wishlist-body">

                <h1>My Wishlist</h1>

                <div className="liked-products normal-products">

                    {myWishlist.map((item) => {
                        return (
                            <Card 
                                product={item} 
                                name={item.name} 
                                src={item.src} 
                                price={item.finalPrice} 
                                rating={item.rating} 
                                productId={item._id} 
                                likeStatus={true} 
                            />
                        )
                    })}

                </div>
            </main>
        </div>
    )
}