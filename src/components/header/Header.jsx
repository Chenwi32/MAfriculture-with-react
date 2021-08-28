import React from "react";
import "./Header.css";
import logo from "../images/icons/7777.png";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { render } from "@testing-library/react";

function Header(authUser) {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <div className="header-search">
        <input className="search-input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        <Link className="link" to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="line-1">
              {user ? `Hello ${user.email}` : `Hello Guest`}
            </span>
            <span className="line-2">{user ? `Sign Out` : `Sign In`}</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="line-1">Returns</span>
          <span className="line-2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="line-1">Your</span>
          <span className="line-2">Prime</span>
        </div>

        <Link className="link" to="/checkout">
          <div className="card-icon">
            <span className="items-inCart">{basket?.length}</span>
            <AddShoppingCartIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
