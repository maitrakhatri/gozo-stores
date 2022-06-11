import { useNavigate } from "react-router-dom";
import { useCart, useToken, useWishlist } from "../context";
import { Like } from "./index";

export function Card(props) {
  const { addToCart, myCart } = useCart();
  const navigate = useNavigate();
  const { token } = useToken();

  const { addToWishlist, deleteFromWishlist, myWishlist, productInWishlist } =
    useWishlist();

  const { productInCart } = useCart();

  const thisInWishlist = productInWishlist(myWishlist, props.productId);
  const thisInCart = productInCart(myCart, props.productId);

  return (
    <div className="card-component">
      <div className="product-card bg-white">
        <div className="product-image-container">
          <img className="product-image" src={props.src} alt={props.name} />

          <Like
            active={thisInWishlist}
            onClick={() => {
              if (thisInWishlist) {
                deleteFromWishlist(token, props.productId);
              } else {
                addToWishlist(token, props.product);
              }
            }}
          />
        </div>
        <div className="product-card-body">
          <div className="product-name">
            {" "}
            {props.name} <span>({props.rating})</span>
          </div>
          <div className="product-price"> {props.price} INR </div>
          <div className="product-action">
            {thisInCart ? (
              <button
                className="btn btn-lightblue"
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className="btn btn-yellow"
                onClick={() => addToCart(token, props.product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
