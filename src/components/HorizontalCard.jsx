import { useCart } from "../context/cart-context"
import { useWishlist } from "../context/wishlist-context"
import { useNavigate } from "react-router-dom"

export function HorizontalCard(props) {

    const { cartDispatch } = useCart()
    const { dispatch, myWishlist, productInWishlist } = useWishlist()

    const navigate = useNavigate()
    
    return (

        <div className="product-card product-horizontal bg-white">

            <div className="product-image-container">
                <img className="product-image" src={props.src} alt={props.name} />
            </div>

            <div className="product-card-body">
                <div className="product-name"> {props.name} </div>

                <div className="product-price"> 
                    <span className="final-price"></span> {props.finalPrice} INR <span className="og-price text-s"><strike> {props.ogPrice} INR </strike></span>
                </div>

                <div className="product-offer"> {props.discount} </div>

                <div className="product-quantity">Quantity: <span>
                    <button onClick={() => {

                        //if the quantity is 1 then removes the product
                        //instead of showing quantity in 0 or negative number
                        if(props.quantity === 1) {
                            cartDispatch({type: "DELETE-FROM-CART", payload: props.productId})
                        }
                        else {
                            cartDispatch({type: "UPDATE-CART-QUANTITY", payload: props.productId, updateType: "decrement"})
                        }
                    }}>-</button> 

                    <span>{props.quantity}</span> 

                    <button onClick={() => cartDispatch({type: "UPDATE-CART-QUANTITY", payload: props.productId, updateType: "increment"})}>+</button>
                </span></div>
            
                <div className="product-action">
                    <button className="btn btn-yellow" onClick={() => cartDispatch({type: "DELETE-FROM-CART", payload: props.productId})}>Remove from Cart</button>
                    <button className="btn btn-outline-lightblue" onClick={() => {
                        if(productInWishlist(myWishlist, props.productId)) {
                            cartDispatch({type: "DELETE-FROM-CART", payload: props.productId})
                            navigate('/wishlist')
                        }
                        else {
                            dispatch({type: "ADD-TO-WISHLIST", payload: props.product})
                            cartDispatch({type: "DELETE-FROM-CART", payload: props.productId})
                        }
                    }}>Move to Wishlist</button>
                </div>
            </div>
        </div>
    )
}

