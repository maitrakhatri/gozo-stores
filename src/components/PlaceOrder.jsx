export function PlaceOrder({totalOGPrice, totalFinalPrice}) {

    return (
        <div className="place-order">
            <div className="card bg-white">

                <div className="card-title">
                    Price Details
                </div>
            
                <div className="card-body">
                    <div className="price-details">
                        <div className="price-details-items">
                            <span className="pdi-name">Price</span>
                            <span className="pdi-price">INR {totalOGPrice}</span>
                        </div>
                        <div className="price-details-items">
                            <span className="pdi-name">Discount</span>
                            <span className="pdi-price">- INR {totalOGPrice - totalFinalPrice}</span>
                        </div>
                    </div>
                    <div className="total-amount">
                        <div className="price-details-items">
                            <span className="pdi-name">Total Amount</span>
                            <span className="pdi-price">INR {totalFinalPrice}</span>
                        </div>
                    </div>
                    <div className="side-msg">
                        You will save INR {totalOGPrice - totalFinalPrice} on this order
                    </div>
                    <button className="btn btn-lightblue">Place Order</button>
                </div>
            </div>
        </div>
    )
}