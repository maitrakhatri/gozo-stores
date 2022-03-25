import Card from "../components/Card";
import Navbar from "../components/Navbar"
import FiltersSidebar from "../components/FiltersSidebar";
import "./productListing.css"

export default function ProductListing() {


    return (
        <div className="productListingPage">

            <Navbar />

            <main class="product-listing-page">

                <FiltersSidebar />

                <div class="product-listing-area">

                    <div class="heading">
                        <h4>Showing all products</h4><p>(Showing  products)</p>
                    </div>

                    <div class="listed-products"> 

                        {loading? <p> Loading Products </p> : 
                            <div class="normal-products">
                                
                            </div> 
                        }
                
                    </div>
                </div>
            </main>
        </div>
    )
}