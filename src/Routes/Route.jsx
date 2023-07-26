import React from "react";
import { Routes, Route } from "react-router";
import ProductPage from "../Pages/ProductPage/ProductPage";
import MockApi from "../Pages/api-response";
import Landing from "../Pages/Landing/Landing";
import Cart from "../Pages/Cart/Cart";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/auth/Login";
import Signup from "../Pages/auth/Signup";
import NotFound from "../Pages/NotFound/NotFound";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import RequireAuth from "../Components/RequireAuth/RequireAuth";
import Loading from "../Components/Loading/Loading";
import Checkout from "../Pages/Checkout/Checkout";
import Profile from "../Pages/Profile/Profile";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/productpage/:categoryId" element={<ProductPage />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={<RequireAuth> {<Wishlist />}</RequireAuth>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/productpage/:categoryId/:singleProductId"
          element={<SingleProduct />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman" element={<MockApi />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/orderSummary" element={<Checkout />} />
        <Route path="/profile" element={ <RequireAuth><Profile /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default Routing;
