import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import "../server"
import Vans from '../pages/Vans/Vans'
import VanDetail from '../pages/Vans/VanDetail'
import Layout from './Layout'
import Dashboard from '../pages/Host/Dashboard'
import Income from '../pages/Host/Income'
import Reviews from '../pages/Host/Reviews'
import HostLayout from './HostLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route path="host" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>)
}

export default App
