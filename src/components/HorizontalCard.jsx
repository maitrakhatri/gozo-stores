import { token } from "../utils/token"
import { useCart } from "../context/cart-context"
import { useWishlist } from "../context/wishlist-context"
import { useNavigate } from "react-router-dom"

export function HorizontalCard(props) {

    const {deleteFromCart, updateCartQuantity} = useCart()
    const {addToWishlist, myWishlist} = useWishlist()

    const productInWishlist = (myWishlist, productId) => myWishlist.some((ele) => ele._id === productId)

    const navigate = useNavigate()
    
    return (

        <div class="product-card product-horizontal bg-white">

            <div class="product-image-container">
                <img class="product-image" src={props.src} alt={props.name} />
            </div>

            <div class="product-card-body">
                <div class="product-name"> {props.name} </div>

                <div class="product-price"> 
                    <span class="final-price"></span> {props.finalPrice} INR <span class="og-price text-s"><strike> {props.ogPrice} INR </strike></span>
                </div>

                <div class="product-offer"> {props.discount} </div>

                <div class="product-quantity">Quantity: <span>
                    <button onClick={() => {

                        //if the quantity is 1 then removes the product
                        //instead of showing quantity in 0 or negative number
                        if(props.quantity === 1) {
                            deleteFromCart(token, props.productId)
                        }
                        else {
                            updateCartQuantity(token, props.productId, "decrement")}
                        }
                    }>-</button> 

                    <span>{props.quantity}</span> 

                    <button onClick={() => updateCartQuantity(token, props.productId, "increment")}>+</button>
                </span></div>
            
                <div class="product-action">
                    <button class="btn btn-yellow" onClick={() => deleteFromCart(token, props.productId)}>Remove from Cart</button>
                    <button class="btn btn-outline-lightblue" onClick={() => {
                        if(productInWishlist(myWishlist, props.productId)) {
                            deleteFromCart(token, props.productId)
                            navigate('/wishlist')
                        }
                        else {
                            addToWishlist(token, props.product)
                            deleteFromCart(token, props.productId)
                        }
                    }}>Move to Wishlist</button>
                </div>
            </div>
        </div>
    )
}

