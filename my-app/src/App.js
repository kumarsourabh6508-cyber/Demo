import logo from './logo.svg';
import './App.css';
import Navber from './Commponents/Navber';
import Home from './Pages/Baner';
import Shop_Card_Data from './Commponents/Shop_Card_Data';
 import {Data} from './Data/Prodect_Data.jsx';
import Footer from './Commponents/Footer';




function App() {
  return (
    <div>
        <Navber /> 
        <Home /> 
         {Object.keys(Data).map((key) => (
           <Shop_Card_Data name={key} Prodect={Data[key]} />
         ))}
        <Footer /> 

    </div>
  );
}
  
export default App;
//  <div className="App">
//       <nav>
//          <h1> 
//           hello world 
//         </h1>
//         <ul>
//           <li>hii</li>
//           <li>about</li>
//           <li>content </li>
//           <li>servic</li>
//         </ul>
//         <button>
//            Login 
//         </button>
//       </nav>
//         <Itom name='Hii ! I Am Max And  My Age ' age={18 }    /> 
//         <Itom name='Hii ! I Am God And  My Age ' age={19 }   /> 
//     </div>