import { Link } from "gatsby"
import React from "react"

function PageNotFound() {
  return (
    <div>
      This page doesn't exist. Go <Link to="/">home</Link>
    </div>
  )
}

export default PageNotFound
