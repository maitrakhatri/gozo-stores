import "./universalStyles.css"
import { Homepage, ProductListing, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Wishlist } from "./pages/Wishlist";

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

    </div>
  );
}

export default App;
