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
import HostVans from '../pages/Host/HostVans'
import HostVansDetail from '../pages/Host/HostVansDetail'
import HostVanPricing from '../pages/Host/HostVanPricing'
import HostVanPhotos from '../pages/Host/HostVanPhotos'
import HostVanInfo from '../pages/Host/HostVanInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>)
}

export default App
