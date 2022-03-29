import "./css/productListing.css"
import { useFilter } from "../context/filter-context"
import { useProduct } from "../context/product-context";
import { Card, Navbar, FiltersSidebar } from "../components";

export function ProductListing() {

    const {loading} = useProduct()
    const {filteredProducts} = useFilter()


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
                                {filteredProducts.map((item) => <Card name={item.name} src={item.src} price={item.finalPrice} rating={item.rating} />)}
                            </div> 
                        }
                
                    </div>
                </div>
            </main>
        </div>
    )
}