import { Link, Outlet, NavLink, useLoaderData, defer, Await } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"
import { Suspense } from "react"

export async function loader({ params, request }) {
  await requireAuth(request)
  return defer({ currentVan: getHostVans(params.id) })
}
export function HostVansDetail() {
  const currentVanPromise = useLoaderData()

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  function renderHostVansDetail(currentVan) {
    console.log(currentVan)
    return (
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${currentVan.type}`}
            >
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink to="." end style={({ isActive }) => isActive ? activeStyles : null}>Details</NavLink>
          <NavLink to="pricing" style={({ isActive }) => isActive ? activeStyles : null}>Pricing</NavLink>
          <NavLink to="photos" style={({ isActive }) => isActive ? activeStyles : null}>Photos</NavLink>
        </nav>
        <Outlet context={{ currentVan: currentVan }} />
      </div>
    )
  }

  return (
    <section>
      <Link
        to=".."
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>
      <Suspense fallback={<h2>Loading van...</h2>} >
        <Await resolve={currentVanPromise.currentVan}>
          {renderHostVansDetail}
        </Await>
      </Suspense>

    </section>
  )
}

