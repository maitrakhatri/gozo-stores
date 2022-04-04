import { useNavigate } from "react-router-dom"
import { useCart, useWishlist } from "../context"
import { Like } from "./Like"

export function Card(props) {

    const {productInCart, myCart, cartDispatch} = useCart()
    const {wishlistDispatch, myWishlist, productInWishlist} = useWishlist()

    const navigate = useNavigate()

    return (

        <div className="card-component">

            <div className="product-card bg-white">
                <div className="product-image-container">
                    <img className="product-image" src={props.src} alt={props.name} />

                    <Like productId={props.productId} onClick={() => {
                        if(productInWishlist(myWishlist, props.productId)) {
                            wishlistDispatch({type: "DELETE-FROM-WISHLIST", payload: props.productId})
                        }
                        else {
                            wishlistDispatch({type: "ADD-TO-WISHLIST", payload: props.product})
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
                            //shows GOT TO CART button
                            if(productInCart(myCart, props.productId)) {
                                navigate('/cart')
                            }
                            else {
                                cartDispatch({type: "ADD-TO-CART", payload: props.product})
                            }
                        }}>{productInCart(myCart, props.productId)? "Go to cart" : "Add to cart"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
