import { NavLink } from "react-router-dom"

function PageNotFound() {
  return (
    <div>
      This page doesn't exist. Go <NavLink to="/">home</NavLink>
    </div>
  )
}

export default PageNotFound
