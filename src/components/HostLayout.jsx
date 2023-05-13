import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeHostNavLink = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeHostNavLink : null)}
          end
          to="."
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeHostNavLink : null)}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeHostNavLink : null)}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeHostNavLink : null)}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
