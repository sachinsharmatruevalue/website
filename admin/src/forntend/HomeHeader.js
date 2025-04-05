import React, { useEffect, useState } from "react";
import "./HomeHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPhone, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AllCategory from "./AllCollectionsCategory/AllCategory";
import Serach from "./Serach/Serach";
import { BsBasket } from "react-icons/bs";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useCurrency } from "../forntend/CurrencyContent";

const HomeHeader = ({ onCurrencyChange, cartCount }) => {
    const navigate = useNavigate();
  // State to store selected currency
  // const [selectedCurrency, setSelectedCurrency] = useState({ symbol: "$", code: "USD" });
  const { currency, setCurrency } = useCurrency();
  const onSelectCurrency = (currency) => () => handleCurrencyChange(currency);
  const currencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "INR", symbol: "₹" },
  ];

  useEffect(() => {
    // Manually initialize Bootstrap dropdowns
    const dropdownElementList = document.querySelectorAll(".dropdown-toggle");
    dropdownElementList.forEach((dropdown) => {
      new window.bootstrap.Dropdown(dropdown);
    });
  }, []);

  // const handleCurrencyChange = (currency) => {
  //   setSelectedCurrency(currency);
  //   if (onCurrencyChange) {
  //     onCurrencyChange(currency);
  //   }
  // };
  const handleCurrencyChange = (currency) => {
    setCurrency(currency); // update globally
  };
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // Check if logged in

  useEffect(() => {
    // Listen for storage updates (useful when logging in/out from another tab)
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  const handleLogout = () => {
    alert("Logout Successfully");
    localStorage.clear();
    navigate("/");
  };



  return (
    <>
      <header className="ec-header">
        {/* Header Top */}
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              {/* Phone Number */}
              <div className="col header-top-center">
                <div className="header-top-call">
                  <FontAwesomeIcon icon={faPhone} /> +91 1234567801
                </div>
              </div>

              <div className="col header-top-center">
                <div className="header-top-call">Order online or call us (+1800) 000 8808</div>
              </div>

              {/* Currency Selector */}
              <div className="col header-top-right d-none d-lg-block">
                <div className="header-top-right-inner d-flex justify-content-end">
                  <div className="header-top-lan-curr header-top-curr dropdown">
                  <button className="dropdown-toggle" data-bs-toggle="dropdown">
    {currency.code} {currency.symbol} <FontAwesomeIcon icon={faAngleDown} />
  </button>
                    <ul className="dropdown-menu">
                      {currencies.map((currency) => (
                       <li key={currency.code} onClick={onSelectCurrency(currency)}>
                          <a className="dropdown-item" href="#">
                            {currency.code} {currency.symbol}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Icons */}
                  <div className="header-top-social">
                    <ul className="mb-0">
                      <li className="list-inline-item">
                        <a href="#" style={{ backgroundColor: "lightblue" }}>
                          <FontAwesomeIcon icon={faFacebookF} style={{ color: "white" }} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" style={{ backgroundColor: "#1DA1F2" }}>
                          <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" style={{ backgroundColor: "#E4405F" }}>
                          <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" style={{ backgroundColor: "#0077B5" }}>
                          <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Header Top */}
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="ec-header-bottom d-none d-lg-block">
          <div className="container position-relative">
            <div className="row">
              <div className="header-bottom-flex">
                <Serach />
                <div className="align-self-center ec-header-logo">
                  <div className="header-logo">
                    <a href="#">
                      <img src="/assets/images/logo/logo3.png" alt="Site Logo" />
                    </a>
                  </div>
                </div>

                {/* Header Icons */}
                <div className="align-self-center ec-header-cart flex-row-reverse custom-header">
                  <div className="ec-header-bottons">
                    {/* User Icon */}
                    <div className="ec-header-user dropdown">
                      {/* Show Profile if Logged In, Otherwise Show Login/Register */}
                  {isLoggedIn ? (
                    <div className="ec-header-user dropdown">
                      <button className="dropdown-toggle" data-bs-toggle="dropdown">
                        <FontAwesomeIcon icon={faUser} />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <Link className="dropdown-item" to="/user-profile">
                            User Profile
                          </Link>
                        </li>
                        <li>
                          <button className="dropdown-item" onClick={handleLogout}>
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="ec-header-user dropdown">
                      <button className="dropdown-toggle" data-bs-toggle="dropdown">
                        <FontAwesomeIcon icon={faUser} />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          <Link className="dropdown-item" to="/register">
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/checkout">
                            Checkout
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/login">
                            Login
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
            </div>

                    {/* Wishlist Icon */}
                    <a href="/whislist" className="ec-header-btn ec-header-wishlist">
                      <div className="header-icon">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <span className="ec-header-count ec-cart-wishlist">0</span>
                    </a>

                    {/* Cart Icon */}
                    <a href="/add-to-cart" className="ec-header-btn ec-side-toggle">
                      <div className="header-icon">
                        <FontAwesomeIcon icon={BsBasket} />
                      </div>
                      {/* {cartCount} */}
                      <span className="ec-header-count ec-cart-count"></span>
                    </a>
                  </div>
                </div>
                {/* End Header Icons */}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div id="ec-main-menu-desk" className="sticky-nav">
          <div className="container position-relative">
            <div className="row">
              <div className="col-sm-12 ec-main-menu-block align-self-center d-none d-lg-block">
                <div className="ec-main-menu">
                  <ul>
                    <Link to="/">
                      <li>
                        <a href="#">Home</a>
                      </li>
                    </Link>
                    <AllCategory />
                    <Link to="/home-product">
                      <li className="dropdown">
                        <a href="#">Products</a>
                      </li>
                    </Link>
                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <Link to="/about">
                          <li>
                            <a href="#">About Us</a>
                          </li>
                        </Link>
                        <Link to="/contact">
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                        </Link>
                        <Link to="/cart">
                          <li>
                            <a href="#">Cart</a>
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <Link to="/blogs">
                      <li className="dropdown">
                        <a href="#">Blog</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
