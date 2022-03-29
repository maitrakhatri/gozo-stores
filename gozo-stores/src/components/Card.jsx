import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/cart-context"
import {token} from "../utils/token"

export function Card(props) {

    const {addToCart, myCart, updateCartQuantity} = useCart()
    const [buttonStatus, setButtonStatus] = useState("Add to Cart")
    const navigate = useNavigate()

    const productInCart = (myCart, productId) => myCart.some((ele) => ele._id === productId)

    return (

        <div className="card-component">

            <div class="product-card bg-white">
                <div class="product-image-container">
                    <img class="product-image" src={props.src} alt={props.name} />
                    <span class="like-product bg-gray"><img src="../../assets/icons/heart-outline.png" alt="like" /></span> 
                </div>
                <div class="product-card-body">
                    <div class="product-name"> {props.name} <span>({props.rating})</span></div>
                    <div class="product-price"> {props.price} INR </div>
                    <div class="product-action">
                        <button class="btn btn-yellow" onClick={() => {

                            //checks if product is already present in Cart
                            //if yes then show GO TO CART button and
                            //on click redirect to CART page
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
