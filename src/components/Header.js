import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnContainer, setBtnConatiner] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between bg-amber-400 shadow-lg sm:bg-amber-200 lg:bg-amber-400">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5">
          <li className="px-2">Online Status : {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnContainer === "Login"
                ? setBtnConatiner("Logout")
                : setBtnConatiner("Login");
            }}
          >
            {btnContainer}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
