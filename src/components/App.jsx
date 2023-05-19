import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import "../server"
import Vans, { loader as vansLoader } from '../pages/Vans/Vans'
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
import NotFound from '../pages/NotFound'
import Error from './Error'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} />
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
    <Route path="*" element={<NotFound />} />
  </Route>

))
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
