import React from 'react'
import '../assets/dist/js/bootstrap.bundle.min.js'
import '../assets/dist/css/bootstrap.min.css'
import './Styles.css'
import {Link} from 'react-router-dom'

  

const Nav = () => {
  return (
  

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div class="container">
      <span class="navbar-brand" href="#">.Folio</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" class="nav-link" >Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/Projects" className="nav-link">Projects</Link>
          </li>
          <li class="nav-item">
            <Link to="/Skills" className="nav-link"  >Skills</Link>
          </li>
          <li class="nav-item dropdown">
            <Link to='/Contact' class="nav-link" >Contact</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>



  )
}

export default Nav