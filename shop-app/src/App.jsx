import React from 'react'
import { Data } from './Data/Prodect_Data';
import Navber  from './Commponents/Navber';
import Baner from './Pages/Baner';
import Shop_Card_Data from './Commponents/Shop_Card_Data';
import Footer from './Commponents/Footer';
const App = () => {
  return (
    <div>
      <Navber />
      <Baner />
      {Object.keys(Data).map((key) => (
        <Shop_Card_Data name={key} Prodect={Data[key]} />
      ))}
      <Footer />
    </div>
  )
}

export default App