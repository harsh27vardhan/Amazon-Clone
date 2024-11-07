import React from "react";
import "./CategoryFilters.css";
import menuLogo from "./assets/menu.svg";
const items = [
  "Fresh",
  "Best Sellers",
  "MX Player",
  "Sell",
  "Books",
  "Kindle eBooks",
  "Amazon Business",
  "AmazonBasics",
  "Gift Cards",
  "Gift Ideas",
  "Buy Again",
  "Home Improvement",
  "Health",
  "Household & Personal Care",
  "New Releases",
];

const CategoryFilters = ({ open, setSidebar }) => {
  function openSidebar() {
    console.log("Open Called!");
    setSidebar(true);
  }
  return (
    <ul className="category-list">
      <li className="category-item all" onClick={openSidebar}>
        <img src={menuLogo} alt="menu-icon" />
        All
      </li>
      {items.map((item) => {
        return <li className="category-item">{item}</li>;
      })}
      {/* This also Works
        {items.map((item)=>
            <li className="category-item">{item}</li>
        )} */}
    </ul>
  );
};

export default CategoryFilters;
