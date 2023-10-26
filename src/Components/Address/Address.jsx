import React, { useContext, useEffect, useState } from "react";
import "./Address.css";
import { authContext } from "../../Contexts/Auth/AuthContext";
import { orderContext } from "../../Contexts/OrderContext/OrderContext";

function Address({ values }) {
  const { orderState, getAddress, addAddress, removeAddress, editAddress } =
    useContext(orderContext);
  const { orderAddress } = orderState;
  const [inputToggle, setInputToggle] = useState(false);
  const [edit, setEdit] = useState(false);

  const dummyDetail = {
    name: "adarsh balak",
    house: "house no.40",
    city: "New delhi",
    state: "green street",
    country: "India",
    pincode: "9999888",
    mobile: "811238288",
  };
  const [inputAddress, setInputAddress] = useState({
    name: "",
    house: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobile: "",
  });

  const initialState = {
    name: "",
    house: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobile: "",
  };

  const { userData } = useContext(authContext);
  const [address, setAddress] = useState([initialState]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputAddress({ ...inputAddress, [name]: value });
  };

  const handleSubmit = (e, id, inputAddress) => {
    e.preventDefault(e);
    if (edit) {
      editAddress(id, inputAddress);
      setInputToggle(!inputToggle);
      return;
    } else {
      addAddress(inputAddress);
      setInputToggle(!inputToggle);
      setAddress(initialState);
    }
  };

  const handleDummyAddress = (e) => {
    e.preventDefault();
    setInputAddress(dummyDetail);
  };

  const handleRemoveAddress = (id) => {
    removeAddress(id);
  };

  const handleEditAddress = (item) => {
    setEdit(!edit);
    setInputAddress(item);
    setInputToggle(!inputToggle);
  };

  useEffect(() => {
    getAddress();
  }, []);

  console.log(orderAddress);

  return (
    <div className="address-contanier">
      <div className="address-box">
        <div className="all-address-box">
          {orderAddress?.map((item) => (
            <div className="single-address-box">
              <input
                type="radio"
                name="single-address"
                value={`${item.name}, ${item.house}, ${item.city}, ${item.state},${item.country},${item.pincode}`}
              />
              {`${item.name}, ${item.house}, ${item.city}, ${item.state},${item.country},${item.pincode}`}
              <div className="single-address-btns">
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveAddress(item._id)}
                >
                  remove
                </button>
                <button
                  className="edit-btn"
                  onClick={() => handleEditAddress(item)}
                >
                  edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {inputToggle ? (
        <div className="address-input-container" >
          <div className="address-form">
          <h2>Address details</h2>
            <form type="submit">
              <input
                type="text"
                onChange={handleInput}
                value={inputAddress?.name}
                name="name"
                placeholder="name"
              />
              <input
                type="text"
                onChange={handleInput}
                value={inputAddress?.house}
                name="house"
                placeholder="house"
              />
              <input
                type="text"
                onChange={handleInput}
                value={inputAddress?.city}
                name="city"
                placeholder="city"
              />
              <input
                type="text"
                onChange={handleInput}
                value={inputAddress?.state}
                name="state"
                placeholder="state"
              />
              <input
                type="text"
                onChange={handleInput}
                value={inputAddress?.country}
                name="country"
                placeholder="country"
              />
              <input
                type="text"
                onChange={handleInput}
                value={inputAddress?.pincode}
                name="pincode"
                placeholder="pincode"
              />
              <input
                type="text"
                onChange={handleInput}
                value={inputAddress?.mobile}
                name="mobile"
                placeholder="mobile"
              />
              <div className="address-btns">
                <button
                  onClick={(e) =>
                    handleSubmit(e, inputAddress._id, inputAddress)
                  }
                >
                  {edit ? "update" : "save"}
                </button>
                <button onClick={() => setInputToggle(!inputToggle)}>
                  Cancel
                </button>
                <button onClick={handleDummyAddress}>
                  fill with Dummy details
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button
          className="addtocart-btn"
          onClick={() => setInputToggle(!inputToggle)}
        >
          add new address
        </button>
      )}
    </div>
  );
}

export default Address;
