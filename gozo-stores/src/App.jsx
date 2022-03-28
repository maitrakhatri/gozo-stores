import "./universalStyles.css"
import Homepage from "./pages/Homepage"
import ProductListing from "./pages/ProductListing"
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>

    </div>
  );
}

export default App;
