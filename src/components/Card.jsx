import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/cart-context"
import { useWishlist } from "../context/wishlist-context"
import {token} from "../utils/token"
import { Like } from "./Like"

export function Card(props) {

    const {addToCart, myCart} = useCart()
    const [buttonStatus, setButtonStatus] = useState("Add to Cart")
    const navigate = useNavigate()

    const productInCart = (myCart, productId) => myCart.some((ele) => ele._id === productId)

    const {addToWishlist, deleteFromWishlist} = useWishlist()

    const [likeStatus, setLikeStatus] = useState(props.likeStatus ?? false)

    return (

        <div className="card-component">

            <div className="product-card bg-white">
                <div className="product-image-container">
                    <img className="product-image" src={props.src} alt={props.name} />

                    <Like active={likeStatus} onClick={() => {
                        if(likeStatus) {
                            deleteFromWishlist(token, props.productId)
                            setLikeStatus(false)
                        }
                        else {
                            addToWishlist(token, props.product)
                            setLikeStatus(true)
                        }
                    } } />
                </div>
                <div className="product-card-body">
                    <div className="product-name"> {props.name} <span>({props.rating})</span></div>
                    <div className="product-price"> {props.price} INR </div>
                    <div className="product-action">
                        <button className="btn btn-yellow" onClick={() => {

                            //checks if product is already present in Cart
                            //if yes then redirect to CART page
                            //if not then adds product to cart and
                            //instantly shows GOT TO CART button
                            if(productInCart(myCart, props.productId)) {
                                navigate('/cart')
                            }
                            else {
                                addToCart(token, props.product)
                                setButtonStatus("Go to Cart")
                            }
                        }}>{buttonStatus}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
