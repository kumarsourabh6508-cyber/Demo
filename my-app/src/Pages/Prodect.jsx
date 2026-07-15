import React from 'react'
import '../Styles/Prodect.css'
const Prodect = ({ Prodect }) => {
  return (
    <div className='card'>
       
      <img src={Prodect.url}  />
         <span className='Star'>⭐</span>
         <div className="Text">
          <h1>{Prodect.name}</h1>
         <p>${Prodect.price}/.</p>
         <button>Buy Now!</button>
         </div>
    </div>
  )
}

export default Prodect