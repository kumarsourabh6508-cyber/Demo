import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Clock from './Pages/Clock'
import Alarm from './Pages/Alarm'
import Navbar from './Commponents/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/Alarm" element={<Alarm />} />
      </Routes>
    </div>
  )
}

export default App