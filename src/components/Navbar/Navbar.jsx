import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import navbar from "../../assets/navbar.png";
import search from "../../assets/search.svg";
import "./Navbar.css";
import Avatar from "../../components/Avatar/Avatar";
// import Button from "../../components/Button/Button";

const Navbar = () => {
  var User = null;

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img className="logo" src={navbar} alt="StackOverflow" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="" width="18" className="search-icon" />
        </form>
        {User === null ? (
          <Link to="/auth" className="nav-item nav-links">
            Log In
          </Link>
        ) : (
          <Fragment>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                M
              </Link>
            </Avatar>

            <button className="nav-item nav-links">Log Out</button>
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
