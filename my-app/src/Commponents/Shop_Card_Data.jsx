import React from 'react'
import '../Styles/Shop_Card_Data.css'
import Page from '../Pages/Prodect.jsx' ; 
const Shop_Card_Data = ({name , Prodect}) => {
  return (
        <div className="main">
          <h1>
              {name}
          </h1>
            <div className="card_data">
              {Prodect?.map(p => <Page Prodect={p} />
              )}
            </div>
        </div>
  )
}

export default Shop_Card_Data