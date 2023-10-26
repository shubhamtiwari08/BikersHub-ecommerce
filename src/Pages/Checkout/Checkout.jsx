import React, { useContext, useEffect, useState } from "react";
import Address from "../../Components/Address/Address";
import { cartContext } from "../../Contexts/Cart/CartContext";
import "./Checkout.css";
import Toast from "../../Components/Toast/Toast";
import { useNavigate } from "react-router";
import { orderContext } from "../../Contexts/OrderContext/OrderContext";
import CartDetails from "../../Components/cartdetail/CartDetails";
import { toast } from "react-toastify";
import { FilterContext } from "../../Contexts/FilterContext/FilterContext";
import { authContext } from "../../Contexts/Auth/AuthContext";
import { wishlistContext } from "../../Contexts/Wishlist/WishlistContext";

function Checkout() {
  const { cartState, removeFromCart, cartDispatch } = useContext(cartContext);
  const {wishlistState,removeFromWishlist} = useContext(wishlistContext)
  const { filterDispatch } = useContext(FilterContext);
  const { userData } = useContext(authContext);
  const finalCart = cartState.cart;
  const finalWishlist = wishlistState.wishlist;
  const Navigate = useNavigate();

  const { cartSum, cartDiscount, cartCount } = cartState;
  const [delieveryAddress, setDeliveryAddress] = useState("");

  const { getAddress, orderState } = useContext(orderContext);
  const { orderAddress } = orderState;
  const { firstName, lastName, email } = userData;

  const handlePlaceOrder = () => {
    if (delieveryAddress === "") {
      toast.warn("Select an address to proceed", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (finalCart.length === 0) {
      toast.warn("cart is empty", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      displayRazorpay();
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("failed to load");
      return;
    }

    const options = {
      key: "rzp_test_NESeC8z8gQuo3G",
      amount: (cartSum - cartDiscount) * 100,
      currency: "INR",
      name: "BikersHub",
      description: "Thank you for shopping with us",
      handler: function (response) {
        Navigate("/");
        toast.success("order placed successfully");
      },
      prefill: {
        name: `${firstName} ${lastName}`,
        email: email,
        contact: "8113887758",
        theme: {
          color: "#F2771A",
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    clearAll();
  };

  

  const clearAll = () => {
    finalCart.map((product)=>removeFromCart(product))
    finalWishlist.map((product)=>removeFromWishlist(product))
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="order-main-container">
      <h2>ORDER SUMMARY</h2>
      <div className="order-summary-conatiner">
      <div className="order-summary" style={{ padding: "20px" }}>
        <h3>
          <hr />
          ORDER DETAILS
          <hr />
        </h3>
        <ol>
          {finalCart.map((item) => (
            <li>
              {item.title}{" "}
              <span style={{ color: "gray" }}>(Rs.{item.price})</span>{" "}
            </li>
          ))}
        </ol>
        <div className="price-box">
          <hr />
          <h3>PRICE DETAILS</h3>
          <hr />
          <div className="detail-box checkout-detail">
            <p>price</p>
            <p>{cartSum}</p>
            <p>Discount</p>
            <p>{cartDiscount}</p>
            <p>Total amount</p>
            <p>{cartSum - cartDiscount}</p>
            <p>Total savings</p>
            <p> {cartDiscount}</p>
          </div>
          <div className="deliver-to">
            <h3>
              {" "}
              <hr />
              DELIVER TO <hr />
            </h3>
            {delieveryAddress ? delieveryAddress : "Please select address"}
          </div>
        </div>
      </div>
      <div className="address-container">
        <div className="all-address-box">
          {orderAddress?.map((item) => (
            <div className="single-address-box">
              <input
                type="radio"
                name="single-address"
                onClick={(e) => setDeliveryAddress(e.target.value)}
                value={`${item.name}, ${item.house}, ${item.city}, ${item.state},${item.country},${item.pincode}`}
              />
              {`${item.name}, ${item.house}, ${item.city}, ${item.state},${item.country},${item.pincode}`}{" "}
            </div>
          ))}
        </div>
        <button className="addtocart-btn" onClick={handlePlaceOrder}>
          PLACE ORDER
        </button>
      </div>
      </div>
    </div>
  );
}

export default Checkout;
