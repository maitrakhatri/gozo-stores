import "./universalStyles.css"
import { Homepage, ProductListing, Cart, LogIn, SignUp, Wishlist, FourOFourPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import { RequiresAuth } from "./context/requires-auth";
import { LoggedIn } from "./context/loggedIn";
import { useAuth, useToken } from "./context";
import { useEffect } from "react";

function App() {

  const { token, setToken } = useToken();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if(token !== null) {
      setIsLoggedIn(true);
    }
  }, [token, isLoggedIn, setToken, setIsLoggedIn]) 

  return (
    <div className="App">

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<RequiresAuth isLoggedIn={isLoggedIn}>
            <Cart/>
          </RequiresAuth>} />
          <Route path="/wishlist" element={<RequiresAuth isLoggedIn={isLoggedIn}>
            <Wishlist/>
          </RequiresAuth>} />
          <Route path="/login" element={<LoggedIn isLoggedIn={isLoggedIn}>
            <LogIn/>
          </LoggedIn>} />
          <Route path="/signup" element={<LoggedIn isLoggedIn={isLoggedIn}>
            <SignUp/>
          </LoggedIn>} />
          <Route path="*" element={<FourOFourPage />} />
        </Routes>
      </ScrollToTop>

    </div>
  );
}

export default App;
