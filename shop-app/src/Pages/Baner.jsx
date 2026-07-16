import React from 'react'
import '../Styles/Baner.css'
import Shop from "../Assets/shop.png";
const Baner = () => {
  return (
    <div className="hero">

      <div className="left">

        <p className="offer hurr">🔥 Hurry Sale!</p>

        <h1>
          Buy Two,
          <br />
          Get <span>50% Discount</span>
        </h1>

        <p>
          Discover the latest fashion collection with amazing
          discounts and free delivery.
        </p>

        <div className="searchBox">
          <button>Shop Now !  </button>
        </div>

      </div>

      <div className="right">
        <img src={Shop} alt="Shopping" />
      </div>

    </div>
  )
}

export default Baner