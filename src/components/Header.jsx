import React from 'react'
import Web from '../images/webdesign.jpg'
import '../components/Header.css'

const Header = () => {
  return (
    <>
      <div class="container col-xxl-8 px-4 py-5 text-white">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={ Web } class="d-block mx-lg-auto img-fluid img-r" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />

      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">SEBASTIAN</h1>
        <h1 className="display-5 fw-bold lh-1 mb-3">MOLINAS <span className='fw-bold text-warning'>.</span></h1>
        <p className="text-warning small fw-bold">Introduction</p>
        <p class="lead">Full Stack Developer</p>
        <p className="lead">Ecommerce, Landing Page, Blog.</p> 
        <button className="btn btn-outline-warning btn-lg ">CONTACT</button>
        
      </div>
    </div>
  </div>
    </>
  )
}

export default Header