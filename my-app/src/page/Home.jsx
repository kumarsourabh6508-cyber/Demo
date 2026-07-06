import React from 'react'
import '../Style/Home.css'
import Shop from "../Assets/shop.png";
const Home = () => {
  return (
    <div className="hero">

      <div className="left">

        <span className="offer">🔥 Hurry Sale!</span>

        <h1>
          Buy Two,
          <br />
          Get <span>25% Discount</span>
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

export default Home