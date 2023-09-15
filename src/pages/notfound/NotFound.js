import React from 'react';
import Footer from '../../component/Footer';
import { Link } from "react-router-dom";
import '../../maincss.css';

import logo from '../../images/logo.webp';
import notfound from '../../images/404.svg';

function NotFound() {
  return (
    <div>
    <section className="hero-inner p404 text-center">
        <div className="logo">
          <Link to="/" className="d-block">
            <img src={logo} alt="" className="img-fluid" />
          </Link>              
        </div>        
      </section> 

      <section className="page-not-found text-center"> 
      <h1 className="mb-3">Page not found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>       
        <Link to="/" className="btn btn-primary mb-4 mb-md-5">
            Back to Home
        </Link> 
        <img src={notfound} alt="" className="img-fluid d-block mx-auto mb-4" />
      </section>    
      
      <Footer />
    </div>
  );
}

export default NotFound;
