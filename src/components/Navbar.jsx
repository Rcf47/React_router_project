import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header>
      <Link className='site-logo' to={"/"}>
        #VANLIFE
      </Link>
      <nav className="navbar">
        <Link to={"/about"}>About</Link>
        <Link to={"/vans"}>Vans</Link>
        <Link to={"/host"}>Host</Link>
      </nav>
    </header>
  )
}

export default Navbar
