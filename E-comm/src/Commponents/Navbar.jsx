// import React from "react";
// import '../Styles/Navber.css'
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaMapMarkerAlt,
//   FaBars,
//   FaCaretDown,
// } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <>
//       <div className="navbar-top">

//         <div className="logo">
//           <span className="amazon">amazon</span>
//           <span className="in">.in</span>
//         </div>


//         <div className="location">
//           <FaMapMarkerAlt />
//           <div>
//             <small>Delivering to</small>
//             <h5>New Delhi 110002</h5>
//           </div>
//         </div>


//         <div className="search-box">
//           <select>
//             <option>Deals</option>
//             <option>All</option>
//           </select>

//           <input type="text" placeholder="Search Amazon.in" />

//           <button>
//             <FaSearch />
//           </button>
//         </div>


//         <div className="lang">
//           🇮🇳 EN <FaCaretDown />
//         </div>


//         <div className="nav-item">
//           <small>Hello, Saurabh</small>
//           <h5>Account & Lists <FaCaretDown /></h5>
//         </div>

//         <div className="nav-item">
//           <small>Returns</small>
//           <h5>& Orders</h5>
//         </div>


//         <div className="cart">
//           <FaShoppingCart />
//           <span>0</span>
//           <h5>Cart</h5>
//         </div>
//       </div>


//       <div className="navbar-bottom">
//         <div className="menu">
//           <FaBars /> All
//         </div>

//         <div className="links">
//           <a href="#">Rufus</a>
//           <a href="#">Fresh</a>
//           <a href="#">Gift Cards</a>
//           <a href="#">MX Player</a>
//           <a href="#">Sell</a>
//           <a href="#">Today's Deals</a>
//           <a href="#">Amazon Pay</a>
//           <a href="#">Bestsellers</a>
//           <a href="#">Buy Again</a>
//           <a href="#">Prime</a>
//           <a href="#">Mobiles</a>
//           <a href="#">Kindle eBooks</a>
//           <a href="#">Flights</a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;




// import React from "react";
// import amazon from "../assets/amazon.png";
// import "../Styles/Navber.css";


// const Navbar = () => {
//   return (
//      <div className="main">
//       <nav className="nav">
//         <div className="box1-a">  <img src={amazon.png} alt="" /><span>.in</span> </div>
//         <div className="box1">hello  this is a navber </div>
//         <div className="box1">hello  this is a navber </div>
//         <div className="box1">hello  this is a navber </div>
//         <div className="box1">hello  this is a navber </div>
//         <div className="box1">hello  this is a navber </div>
//         <div className="box1">hello  this is a navber </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;






import { NavLink } from 'react-router-dom'
import '../Styles/Navbar.css'
function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
      <NavLink to="/clock" className={({ isActive }) => isActive ? "active-link" : ""}>Clock</NavLink>
    </nav>
  )
}

export default Navbar