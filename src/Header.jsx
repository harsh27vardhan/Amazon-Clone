import React from "react";
import Amazonlogo from "./assets/amazoncom.svg"
import SearchLogo from "./assets/search.svg"
import CartLogo from "./assets/cart.svg"
import LocationLogo from "./assets/location.svg"
import dropdownLogo from "./assets/dropdown.svg"
import indiaFlag from "./assets/india.svg"
import './Header.css'
// import Cart from "./Cart";


function Header() {
  return (
    <div className='header'>
      <img className='header-logo' src={Amazonlogo} alt="" />

      <div className="location-container">
        <img className="location-logo" src={LocationLogo} alt="" />
        <div className="location_option">
          <span className="header_optionOne">Deliver to Harsh</span>
          <span className="header_optionTwo">Dehradun 248197</span>
        </div>
      </div>

      <div className="header_search">
        <div className="search-option-text">
          <div className="search-text-status">All</div>
          <img className="dropdown-logo" src={dropdownLogo} alt="" />
        </div>
        <input className="header_searchInput" type="text" />
        <img className="header_searchIcon" src={SearchLogo} alt=""/>
      </div>

      <div className="header_nav">
        <div className="countries">
          <img className="country-flag" src={indiaFlag} alt="" />
          <div className="country-lang">EN</div>
          {/* <img className="dropdown-logo" src={dropdownLogo} alt="" /> */}
        </div>
        <div className="header_option">
            <span className="header_optionOne">Hello Guest!</span>
            <span className="header_optionTwo">Sign In</span>
        </div>
        <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_option">
            <span className="header_optionOne">Hello Guest!</span>
            <span className="header_optionTwo">Sign In</span>
        </div>

        <div className="basket-container">
          <div className="header_option Basket">
            <span className="header_optionTwo headerBasketCount">0</span>
            <img className="cart-img" src={CartLogo} alt="" />
          </div>
          <span className="cart-text">Cart</span>
        </div>
      </div>
    </div>
  )
}

export default Header
