import { PlaceOrder, HorizontalCard, Navbar, Toast } from "../components"
import { useCart, useAuth } from "../context"
import "./css/cart.css"
import { useEffect, useState } from "react"

export function Cart() {

  const { myCart } = useCart();

  const {showToast} = useAuth()

    //Price calculations for PLACE ORDER/BILL section
    const [totalFinalPrice, setTotalFinalPrice] = useState(0)
    const [totalOGPrice, setTotalOGPrice] = useState(0)

    const totalFinalPriceReducer = (acc, product) => acc + (product.finalPrice*product.qty)
    const totalOGPriceReducer = (acc, product) => acc + (product.ogPrice*product.qty)

    useEffect(() => {
        setTotalFinalPrice(myCart.reduce(totalFinalPriceReducer, 0))
        setTotalOGPrice(myCart.reduce(totalOGPriceReducer,0))
    }, [myCart])

    useEffect(() => {
        document.title = "Cart | gozo Stores";
    },[])

    return (
        <div className="cart-page">

          <Navbar />
          {showToast && <Toast title="Logged In successfully !!" />}

          <h1 className="text-center">My Cart</h1>
          <main>
              <div className="cart">
                  <div className="cart-item">

                      {myCart.map((product) => 
                        <HorizontalCard 
                            name={product.name} 
                            src={product.src} 
                            ogPrice={product.ogPrice} 
                            finalPrice={product.finalPrice} 
                            quantity={product.qty} 
                            productId={product._id} 
                            product={product} 
                        />)}
                      
                  </div>
              </div>
              
              <PlaceOrder 
                totalOGPrice={totalOGPrice} 
                totalFinalPrice={totalFinalPrice} />
          </main>

        </div>
    )
}