import './App.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import "../server"
import Vans, { loader as vansLoader } from '../pages/Vans/Vans'
import VanDetail, { loader as vanDetailLoader } from '../pages/Vans/VanDetail'
import Layout from './Layout'
import Dashboard from '../pages/Host/Dashboard'
import Income from '../pages/Host/Income'
import Reviews from '../pages/Host/Reviews'
import HostLayout from './HostLayout'
import HostVans, { loader as hostVansLoader } from '../pages/Host/HostVans'
import HostVansDetail, { loader as hostVansDetailLoader } from '../pages/Host/HostVansDetail'
import HostVanPricing from '../pages/Host/HostVanPricing'
import HostVanPhotos from '../pages/Host/HostVanPhotos'
import HostVanInfo from '../pages/Host/HostVanInfo'
import NotFound from '../pages/NotFound'
import Error from './Error'
import Login from '../pages/Login'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} />
    <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} loader={async () => {
        return null
      }} />
      <Route path="income" element={<Income />} loader={async () => {
        return null
      }} />
      <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
      <Route path="vans/:id" element={<HostVansDetail />} loader={hostVansDetailLoader}>
        <Route index element={<HostVanInfo />} loader={async () => {
          return null
        }} />
        <Route path="pricing" element={<HostVanPricing />} loader={async () => {
          return null
        }} />
        <Route path="photos" element={<HostVanPhotos />} loader={async () => {
          return null
        }} />
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
