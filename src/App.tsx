import { useState } from 'react'
import { Outlet, Link } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <ul>
        <li>
          <Link to={`login`}>Sign in</Link>
        </li>
        <li>
          <Link to={`register`}>Sign up</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
