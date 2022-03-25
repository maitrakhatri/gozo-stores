export default function Navbar() {
    return (
        <div className="Navbar">

            <nav class="navbar bg-yellow">
                <div class="navbar-header">
                    <a href="#"><p class="navbar-header-title text-l text-gray">gozo Stores</p></a>
                </div>
                <div class="navbar-links">
                    <span class="searchbar">
                        <span class="input-group">
                            <input type="text" placeholder="find your product" />
                        </span>
                        <a href="#"><img class="icon" src="../../assets/icons/search.png" alt="search" /></a>
                    </span>
                    <div class="icon-with-badge">
                        <a href="#"><img class="icon" src="../../assets/icons/heart-outline.png" alt="wishlist" /></a>
                        <span class="badge bg-lightblue">9</span>
                    </div>
                    <div class="icon-with-badge">
                        <a href="#"><img class="icon" src="../../assets/icons/cart-outline.png" alt="cart" /></a>
                        <span class="badge bg-lightblue">5</span>
                    </div>
                    <button class="btn btn-lightblue"><a href="#">Log In</a></button>
                </div>
            </nav>
        </div>
    )
}

