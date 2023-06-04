import React from "react"
import "./Headtitle.css"
import { useLocation, NavLink } from "react-router-dom"

const HeadTitle = () => {
  const location = useLocation()

  return (
    <>
      <section className='image-heading row'>
        <div className='container'>
          {/*<h1>{location.pathname.slice(1, -2, -1)}</h1>*/}
          <h1 className="col-md">{location.pathname.split("/")[1]}</h1>
          {/*<h1>{location.pathname.replace(/ /, "")}</h1>*/}

          <button className="col-md-3">
          <NavLink to="/"> Home / </NavLink>
            <span>{location.pathname.split("/")[1]}</span>
            {/*<span>{location.pathname.replace("/", " ")}</span>*/}
          </button>
        </div>
      </section>
    </>
  )
}

export default HeadTitle
