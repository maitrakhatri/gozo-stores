import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

export function Navbar() {

    const {myCart} = useCart()
    const {myWishlist} = useWishlist()

    return (
        <div className="Navbar">

            <nav className="navbar bg-yellow">
                <div className="navbar-header">
                    <Link to="/" ><p className="navbar-header-title text-l text-gray">gozo Stores</p></Link>
                </div>
                <div className="navbar-links">
    
                    <Link to="/products" ><button className="btn btn-lightblue">All Products</button> </Link>
                    {/* <span className="searchbar">
                        <span className="input-group">
                            <input type="text" placeholder="find your product" />
                        </span>
                        <img className="icon" src="../../assets/icons/search.png" alt="search" />
                    </span> */}
                    <div className="icon-with-badge">
                        <Link to="/wishlist" ><img className="icon" src="../../assets/icons/heart-outline.png" alt="wishlist" />
                        <span className="badge bg-lightblue">{myWishlist.length}</span>
                        </Link>
                    </div>
                    <div className="icon-with-badge">
                        <Link to="/cart" ><img className="icon" src="../../assets/icons/cart-outline.png" alt="cart" />
                        <span className="badge bg-lightblue">{myCart.length}</span>
                        </Link>
                    </div>
                    <Link to="/login" ><button className="btn btn-lightblue">Log In</button> </Link>
                </div>
            </nav>
        </div>
    )
}

