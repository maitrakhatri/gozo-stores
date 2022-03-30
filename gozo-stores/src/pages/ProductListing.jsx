import "./css/productListing.css"
import { useFilter } from "../context/filter-context"
import { useProduct } from "../context/product-context";
import { Card, Navbar, FiltersSidebar } from "../components";
import { useWishlist } from "../context/wishlist-context";
import { useEffect } from "react"

export function ProductListing() {

    const {loading} = useProduct()
    const {filteredProducts} = useFilter()
    const {myWishlist} = useWishlist()

    const productInWishlist = (myWishlist, productId) => myWishlist.some((ele) => ele._id === productId)

    useEffect(() => {
        document.title = "Products | gozo Stores";
    },[])

    return (
        <div className="productListingPage">

            <Navbar />

            <main class="product-listing-page">

                <FiltersSidebar />

                <div class="product-listing-area">

                    <div class="heading">
                        <h4>Showing all products</h4><p>(Showing {filteredProducts.length}  products)</p>
                    </div>

                    <div class="listed-products"> 

                        {loading? <p> Loading Products </p> : 
                            <div class="normal-products">
                                {filteredProducts.map((item) => <Card product={item} name={item.name} src={item.src} price={item.finalPrice} rating={item.rating} productId={item._id} likeStatus={ () => productInWishlist(myWishlist, item._id)}/>)}
                            </div> 
                        }
                
                    </div>
                </div>
            </main>
        </div>
    )
}