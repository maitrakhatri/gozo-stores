import { PlaceOrder, HorizontalCard, Navbar } from "../components"
import { useCart } from "../context/cart-context"
import "./css/cart.css"
import { useEffect, useState } from "react"

export function Cart() {

  const { myCart } = useCart()

    //Price calculations for PLACE ORDER/BILL section
    const [totalFinalPrice, setTotalFinalPrice] = useState(0)
    const [totalOGPrice, setTotalOGPrice] = useState(0)

    const totalFinalPriceReducer = (acc, product) => acc + (product.finalPrice*product.qty)
    const totalOGPriceReducer = (acc, product) => acc + (product.ogPrice*product.qty)

    useEffect(() => {
        setTotalFinalPrice(myCart.reduce(totalFinalPriceReducer, 0))
        setTotalOGPrice(myCart.reduce(totalOGPriceReducer,0))
    }, [myCart])

    return (
        <div className="cart-page">

          <Navbar />

          <h1 className="text-center">My Cart</h1>
          <main>
              <div className="cart">
                  <div className="cart-item">

                      {myCart.map(({name, src, ogPrice, finalPrice, qty, _id}) => <HorizontalCard name={name} src={src} ogPrice={ogPrice} finalPrice={finalPrice} quantity={qty} productId={_id} />)}
                      
                  </div>
              </div>
              
              <PlaceOrder totalOGPrice={totalOGPrice} totalFinalPrice={totalFinalPrice} />
          </main>

        </div>
    )
}