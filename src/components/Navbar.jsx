import React from 'react'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <> 
    <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Eighth navbar example">
    <div class="container">
      <a class="navbar-brand fw-bold fs-1" href="#">SM<span class="text-warning">.</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-2">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href='#'>Contact</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    
    </>
  )
}

export default Navbar