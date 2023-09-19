import React from 'react'
import logo from '../images/logo.webp';
import { Link } from 'react-router-dom';

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
              <Link to="/">Home</Link>
                <Link to="/aboutus">About Us</Link>
                <Link to="/category">Category</Link>
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