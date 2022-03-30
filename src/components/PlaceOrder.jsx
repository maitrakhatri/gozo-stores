export function PlaceOrder({totalOGPrice, totalFinalPrice}) {

    return (
        <div class="place-order">
            <div class="card bg-white">

                <div class="card-title">
                    Price Details
                </div>
            
                <div class="card-body">
                    <div class="price-details">
                        <div class="price-details-items">
                            <span class="pdi-name">Price</span>
                            <span class="pdi-price">INR {totalOGPrice}</span>
                        </div>
                        <div class="price-details-items">
                            <span class="pdi-name">Discount</span>
                            <span class="pdi-price">- INR {totalOGPrice - totalFinalPrice}</span>
                        </div>
                    </div>
                    <div class="total-amount">
                        <div class="price-details-items">
                            <span class="pdi-name">Total Amount</span>
                            <span class="pdi-price">INR {totalFinalPrice}</span>
                        </div>
                    </div>
                    <div class="side-msg">
                        You will save INR {totalOGPrice - totalFinalPrice} on this order
                    </div>
                    <button class="btn btn-lightblue">Place Order</button>
                </div>
            </div>
        </div>
    )
}