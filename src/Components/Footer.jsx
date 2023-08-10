import React from 'react'
import './Styles.css'
import '../assets/dist/css/bootstrap.min.css'
import '../assets/dist/js/bootstrap.bundle.min.js'
import { FaAddressCard, FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='card-footer'>
    <div class="container">
        <h1 className='text-center text-white-50 mt-5 '>Please Check My profile and send your Feedback</h1>
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    
    <ul class="nav col  list-unstyled d-block text-center">
        <li><a href='#' className='text-decoration-none fw-bold fs-6' ><FaPhone className='m-2'style={{height:'27.5px',width:'27.5px'}}/><br></br>54791201</a></li>
        <li><a href='#' className='text-decoration-none fw-bold fs-6'><FaMailBulk className='m-2'style={{height:'27.5px',width:'27.5px'}}/><br></br>ziedsgm@gmail.com</a></li>
        <li><a href='#' className='text-decoration-none fw-bold fs-6'><FaAddressCard className='m-2'style={{height:'27.5px',width:'27.5px'}}/><br></br>Sfax-Jbeniana</a></li>
    </ul>
    <div className='nav col list-unstyled d-block text-center'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13068.023141907885!2d10.914616583753181!3d35.03158516667039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301c19dbde2fe29%3A0x2e041f3609eaddbc!2z2KzYqNmG2YrYp9mG2Kk!5e0!3m2!1sar!2stn!4v1681654309641!5m2!1sar!2stn" style={{border:0,height:"200px"}} loading="lazy"></iframe>
    </div>
    <ul class="nav col list-unstyled d-block text-center">
        <li><a href='#' className='text-decoration-none fw-bold fs-6' ><FaFacebook className='m-2'style={{height:'27.5px',width:'27.5px'}}/><br></br>Zied Saguem</a></li>
        <li><a href='#' className='text-decoration-none fw-bold fs-6'><FaTwitter className='m-2'style={{height:'27.5px',width:'27.5px'}}/><br></br>Zied Saguem</a></li>
        <li><a href='#' className='text-decoration-none fw-bold fs-6'><FaLinkedin className='m-2'style={{height:'27.5px',width:'27.5px'}}/><br></br>Zied Saguem</a></li>
    </ul>
  </footer>
</div>
</div>
  )
}

export default Footer