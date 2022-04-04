import { useWishlist } from "../context"

export function Like(props) {

    const {myWishlist, productInWishlist} = useWishlist()

    return(
        <div onClick={props.onClick}>
            {productInWishlist(myWishlist, props.productId)? <span className="like-product bg-gray"><img src="../../assets/icons/heart-filled.png" alt="like" /></span> : <span className="like-product bg-gray"><img src="../../assets/icons/heart-outline.png" alt="like" /></span>}
        </div>
    )
}