import React from 'react'
import "./CategoryFilters.css"
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
    "New Releases"
]

const CategoryFilters = () => {
  return (
    <ul className="category-list">
        <li className="category-item">
            <img src="https://via.placeholder.com/17x14" alt="menu-icon" />
            All
        </li>
        {items.map((item)=>{
            return <li className="category-item">{item}</li>
        })}
        {/* This also Works
        {items.map((item)=>
            <li className="category-item">{item}</li>
        )} */}
    </ul>
  )
}

export default CategoryFilters
