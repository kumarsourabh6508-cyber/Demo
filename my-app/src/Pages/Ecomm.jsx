import React from 'react'

const Ecomm = () => {
  return (
    <div>  <Navber /> 
            <Home /> 
             {Object.keys(Data).map((key) => (
               <Shop_Card_Data name={key} Prodect={Data[key]} />
             ))}
            <Footer /> 
            </div>
  )
}

export default Ecomm