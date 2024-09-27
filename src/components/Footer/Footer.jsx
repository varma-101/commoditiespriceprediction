import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import Social from './Social.jsx'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                {/* <img src={assets.logo} alt="" /> */}
                <p>&copy; Copyright 2024. All rights reserved.</p>
                <div className="footer-social-icons">
                    <Social/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Get To Know Us</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    {/* <li>+91 9090909090</li> */}
                    <li>agripredict@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            &copy; 2024 AgriPrdict. All rights reserved.
        </p>

    </div>
  )
}

export default Footer