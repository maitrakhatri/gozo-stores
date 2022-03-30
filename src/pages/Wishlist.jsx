import "./css/wishlist.css"
import {Navbar, Card} from "../components"
import { useWishlist } from "../context/wishlist-context"
import { useEffect } from "react"

export function Wishlist() {

    const {myWishlist} = useWishlist()

    useEffect(() => {
        document.title = "Wishlist | gozo Stores";
    },[])

    return (
        <div className="wishlist">

            <Navbar />
            <main className="wishlist-body">

                <h1>My Wishlist</h1>

                <div className="liked-products normal-products">

                    {myWishlist.map((item) => {
                        return (
                            <Card product={item} name={item.name} src={item.src} price={item.finalPrice} rating={item.rating} productId={item._id} likeStatus={true} />
                        )
                    })}

                </div>
            </main>
        </div>
    )
}