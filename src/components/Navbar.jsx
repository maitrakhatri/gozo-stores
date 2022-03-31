import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

export function Navbar() {

    const {myCart} = useCart()
    const {myWishlist} = useWishlist()

    return (
        <div className="Navbar">

            <nav class="navbar bg-yellow">
                <div class="navbar-header">
                    <Link to="/" ><p class="navbar-header-title text-l text-gray">gozo Stores</p></Link>
                </div>
                <div class="navbar-links">
    
                    <Link to="/products" ><button class="btn btn-lightblue">All Products</button> </Link>
                    {/* <span class="searchbar">
                        <span class="input-group">
                            <input type="text" placeholder="find your product" />
                        </span>
                        <img class="icon" src="../../assets/icons/search.png" alt="search" />
                    </span> */}
                    <div class="icon-with-badge">
                        <Link to="/wishlist" ><img class="icon" src="../../assets/icons/heart-outline.png" alt="wishlist" />
                        <span class="badge bg-lightblue">{myWishlist.length}</span>
                        </Link>
                    </div>
                    <div class="icon-with-badge">
                        <Link to="/cart" ><img class="icon" src="../../assets/icons/cart-outline.png" alt="cart" />
                        <span class="badge bg-lightblue">{myCart.length}</span>
                        </Link>
                    </div>
                    <Link to="/login" ><button class="btn btn-lightblue">Log In</button> </Link>
                </div>
            </nav>
        </div>
    )
}

