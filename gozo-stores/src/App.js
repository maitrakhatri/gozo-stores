import "./universalStyles.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Thumbnail from "./components/Thumbnail"
import Sidekick from "./components/SidekickCard"
import HorizontalCard from "./components/HorizontalCard"
import ProductListing from "./pages/ProductListing"
import MockApi from "./pages/MockAPI"

function App() {

  return (
    <div className="App">
      <ProductListing />
    </div>
  );
}

export default App;
