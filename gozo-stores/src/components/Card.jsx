export function Card(props) {
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
                        <button class="btn btn-yellow">Move to Cart</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

