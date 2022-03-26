import Card from "../components/Card";
import Navbar from "../components/Navbar"
import FiltersSidebar from "../components/FiltersSidebar";
import "./productListing.css"
import { useProduct } from "../context/product-context";

export default function ProductListing() {

    const {products, loading} = useProduct()

    return (
        <div className="productListingPage">

            <Navbar />

            <main class="product-listing-page">

                <FiltersSidebar />

                <div class="product-listing-area">

                    <div class="heading">
                        <h4>Showing all products</h4><p>(Showing {products.length}  products)</p>
                    </div>

                    <div class="listed-products"> 

                        {loading? <p> Loading Products </p> : 
                            <div class="normal-products">
                                {products.map((item) => <Card name={item.name} src={item.src} price={item.finalPrice} rating={item.rating} />)}
                            </div> 
                        }
                
                    </div>
                </div>
            </main>
        </div>
    )
}