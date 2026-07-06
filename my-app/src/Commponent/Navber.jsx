import React from 'react'
import "../Style/Navber.css";
import Shop from "../Assets/shop.png";
const Navber = () => {
  return (
   <div className="Navber">

  <div className="Image">
    <img src={Shop} alt="Shop Logo" />
    <h1>Shop !</h1>
  </div>

  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <div className="Search">
    <input type="text" placeholder="Search Product..." />
  </div>

  <button className="LoginBtn">
    Login
  </button>

</div>
  )
}

export default Navber