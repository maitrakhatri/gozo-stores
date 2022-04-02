import "./universalStyles.css"
import { Homepage, ProductListing, Cart, LogIn, SignUp, Wishlist, FourOFourPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

function App() {

  return (
    <div className="App">

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<FourOFourPage />} />
        </Routes>
      </ScrollToTop>

    </div>
  );
}

export default App;
