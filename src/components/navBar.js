// const displayHeading = () => {
//   if (window.location.pathname === '/') {
//         return 'Calculator'
//     } else if ('/armies') {
//         return 'Armies'
//     } else {
//         return 'No Page Found'
//     }
// };

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import React from 'react'

function navbar() {
  return (
    <div className="nav">
      <Link to="/"><h2>Calculator</h2></Link>
      <Link to="/armies"><h2>Armies</h2></Link>
    </div>
  )
}

export default navbar