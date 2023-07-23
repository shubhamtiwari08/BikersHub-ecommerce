import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import CategoryProvider from "./Contexts/Category/categoryContext";
import ProductProvider from "./Contexts/Category/ProductContext";
import ProductCompose from "./Contexts/Category/ProductCompose";
import FilterProvider from "./Contexts/FilterContext/FilterContext";
import AuthProvider from "./Contexts/Auth/AuthContext";
import CartProvder from "./Contexts/Cart/CartContext";
import WishlistProvider from "./Contexts/Wishlist/WishlistContext";
import AddressProvider from "./Contexts/Address/AddressContext";
import OrderProvider from "./Contexts/OrderContext/OrderContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <WishlistProvider>
            <CartProvder>
              <CategoryProvider>
                <ProductProvider>
                  <ProductCompose>
                    <FilterProvider>
                      <App />
                    </FilterProvider>
                  </ProductCompose>
                </ProductProvider>
              </CategoryProvider>
            </CartProvder>
          </WishlistProvider>
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
