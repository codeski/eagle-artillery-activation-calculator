import React from 'react'
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="nav">
      <Link to="/"><h2>Calculator</h2></Link>
      <Link to="/armies"><h2>Armies</h2></Link>
    </div>
  )
}

export default navbar