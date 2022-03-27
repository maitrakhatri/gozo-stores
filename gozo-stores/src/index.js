import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductProvider } from "./context/product-context";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);