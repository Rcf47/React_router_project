import { NavLink, Outlet } from "react-router-dom"

function HostLayout() {
  const activeHostNavLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  }
  return (
    <>
      <nav className="host-nav">
        <NavLink style={({ isActive }) => isActive ? activeHostNavLink : null} end to="/host">Dashboard</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeHostNavLink : null} to="/host/income">Income</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeHostNavLink : null} to="/host/vans">Vans</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeHostNavLink : null} to="/host/reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout
