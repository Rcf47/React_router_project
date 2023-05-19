import { Link, NavLink } from "react-router-dom"
import avImg from "../assets/images/avatar-icon.png"

function Header() {

  const activeNavLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }

  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <NavLink style={({ isActive }) => isActive ? activeNavLink : null} to="/host">Host</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeNavLink : null} to="/about">About</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeNavLink : null} to="/vans">Vans</NavLink>
        <Link to="login" className="login-link">
          <img
            src={avImg}
            className="login-icon"
          />
        </Link>
      </nav>
    </header >
  )
}

export default Header
