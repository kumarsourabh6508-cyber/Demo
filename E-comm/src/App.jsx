import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Clock from './Pages/Clock'
import Navbar from './Commponents/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </div>
  )
}

export default App