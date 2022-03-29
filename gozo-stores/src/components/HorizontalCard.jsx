export function HorizontalCard(props) {
    return (

        <div class="product-card product-horizontal bg-white">

            <div class="product-image-container">
                <img class="product-image" src={props.src} alt={props.name} />
            </div>

            <div class="product-card-body">
                <div class="product-name"> {props.name} </div>
                <div class="product-price"> <span class="final-price"></span> {props.finalPrice} <span class="og-price text-s"><strike> {props.ogPrice} </strike></span></div>
                <div class="product-offer"> {props.discount} </div>
                <div class="product-quantity">Quantity: <span>
                    <button>-</button> <span>{props.quantity}</span> <button>+</button>
                </span></div>
            
                <div class="product-action">
                    <button class="btn btn-yellow">Remove from Cart</button>
                    <button class="btn btn-outline-lightblue">Move to Wishlist</button>
                </div>
            </div>
        </div>
    )
}

