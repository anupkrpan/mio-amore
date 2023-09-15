import React from 'react'
import logo from '../images/logo.webp';

function Footer() {
  return (
    <footer>
        <div className="container-fluid">
          <div className="logo">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <div className="row">
            <div className="col-lg-12 mb-4 text-center">
              <div className="social-links">
                <a href="">
                  <i className="la la-facebook" />
                </a>
                <a href="">
                  <i className="la la-instagram" />
                </a>
              </div>
            </div>
            <div className="col-lg-12 mb-5 text-center">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Products</a>
                <a href="">Franchise Corner</a>
                <a href="">Contact Us</a>
              </div>
            </div>
            <div className="col-lg-12 text-center ">
              <div className="copyright">
                ©2023. mio amore. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer