import React from 'react'
import Shop from "../Assets/shop.png";
import "../Styles/Footer.css";


const Footer = () => {
  return (
    <div className="Footer">
  <div className="foot-1">
  <div className="logo">
  <img src={Shop} alt="Logo" />
  <h1>Shop !</h1>
    </div>

    <h2>Contact Information</h2>
    <p>Email: shop@gmail.com</p>
    <p>Phone: +91 9876543210</p>
    <p>Address: New Delhi, India</p>
  </div>

  <div className="foot-1">
    <h2>Quick Links</h2>

    <div className="foot-1-ul">
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
    </div>
</div>

  <div className="foot-1">
    <h2>Newsletter</h2>

    <div className="input">
      <input type="email" placeholder="Enter Your Email" />
      <button>Subscribe</button>
    </div>

    <ul className="icons">
      <li><a href="#"><i className="fa-brands fa-facebook-f">📘</i></a></li>
      <li><a href="#"><i className="fa-brands fa-twitter">🐦</i></a></li>
      <li><a href="#"><i className="fa-brands fa-instagram">📸</i></a></li>
      <li><a href="#"><i className="fa-brands fa-linkedin-in">💼</i></a></li>
    </ul>
  </div>
</div>
  )
}

export default Footer