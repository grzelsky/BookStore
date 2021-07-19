import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { NavLink } from "react-router-dom";
import {
  FaBookOpen,
  FaUserShield,
  FaUserSlash,
  FaShoppingCart,
} from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";
// import Search from "../Header/Search/Search";

import "./Header.scss";
const Header = () => {
  const { adminLogged, handleAdminLogged, modalOn, cart } =
    useContext(StoreContext);

  return (
    <header>
      <NavLink to={`/`}>
        <button className="mainPageButton" title="Main Page">
          <FaBookOpen />
        </button>
      </NavLink>
      {adminLogged ? (
        ""
      ) : (
        <>
          <NavLink to={`/cart`}>
            <button className="cartButton" title="Cart">
              <FaShoppingCart />
            </button>
          </NavLink>
          {cart.length > 0 && <div className="cartInfo">{cart.length}</div>}
        </>
      )}
      {adminLogged && (
        <button className="addProduct" title="Add product" onClick={modalOn}>
          <BiBookAdd />
        </button>
      )}
      <button
        className="loginButton"
        onClick={adminLogged ? handleAdminLogged : modalOn}
      >
        {adminLogged ? (
          <FaUserSlash title="Logout admin" />
        ) : (
          <FaUserShield title="Login admin" />
        )}
      </button>
    </header>
  );
};

export default Header;
