import React, { useEffect } from 'react'
import Footer from '../../component/Footer';
import { Link } from "react-router-dom";
import '../../maincss.css';

import hero from "../../images/hero-cake.webp";
import bdc from "../../images/birthday-cake.webp";
import wdc from "../../images/wedding-cake.webp";
import anvc from "../../images/anniversary-cake.webp";
import superc from "../../images/superhero-cake.webp";
import photoc from "../../images/photo-cake.webp";
import dreamc from "../../images/dream-shape-cake.webp";

import logo from '../../images/logo.webp';
import cakeinner from '../../images/cake-inner.webp';
import {SlideshowLightbox} from 'lightbox.js-react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useScrollToTop from '../../component/useScrolltotop';


function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useScrollToTop()
  return (
    <div>
      <section className="hero-inner mb-5">
        <div className="logo">
          <Link to="/" className="d-block">
            <img src={logo} alt="" className="img-fluid" />
          </Link>              
        </div>
        <h1>Birthday Cake</h1>
      </section>
      <section className="py-0 filter">
        <div className="container-fluid">        
          <div className="row">
            <div className="col-md-8 mb-4 mb-md-0 align-self-center text-center text-md-start">
              <h3 className="text-primary m-0">Your favourite Cakes</h3>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <div className="dropdown">
                <button
                  className="btn btn-primary btn-lg dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" 
                >
                  <i className="las la-sliders-h" /> Filter
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-md-end"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec sec-inner-bg">
        <div className="container-fluid">
          <div className="row inner-item-row">
            {/*loop item start-*/}
            <div className="col-md-6 col-lg-6">
              <div className="item-inner">
                <a href="javascript:;" className="d-block" onClick={handleShow}>
                  <img
                    src={cakeinner}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                </a>
                <h4>
                  <a href="#">Cake Name</a>
                </h4>
                <p>Dummy Copy Dummy Copy Dummy Copy Dummy Copy</p>
                <h5>
                  Price : <span>₹ 1200.00</span>
                </h5>
                <h5>
                  Weight : <span>2 Kg</span> <br className="d-block d-sm-none" />{" "}
                  Flavours : <span>Chocolate</span>
                </h5>
              </div>
            </div>
            {/*loop item end-*/}
            <div className="col-md-6 col-lg-6">
              <div className="item-inner">
                <a href="javascript:;" className="d-block" onClick={handleShow}>
                  <img
                    src={cakeinner}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                </a>
                <h4>
                  <a href="#">Cake Name</a>
                </h4>
                <p>Dummy Copy Dummy Copy Dummy Copy Dummy Copy</p>
                <h5>
                  Price : <span>₹ 1200.00</span>
                </h5>
                <h5>
                  Weight : <span>2 Kg</span> <br className="d-block d-sm-none" />{" "}
                  Flavours : <span>Chocolate</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="item-inner">
                <a href="javascript:;" className="d-block" onClick={handleShow}>
                  <img
                    src={cakeinner}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                </a>
                <h4>
                  <a href="#">Cake Name</a>
                </h4>
                <p>Dummy Copy Dummy Copy Dummy Copy Dummy Copy</p>
                <h5>
                  Price : <span>₹ 1200.00</span>
                </h5>
                <h5>
                  Weight : <span>2 Kg</span> <br className="d-block d-sm-none" />{" "}
                  Flavours : <span>Chocolate</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="item-inner">
                <a href="javascript:;" className="d-block" onClick={handleShow}>
                  <img
                    src={cakeinner}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                </a>
                <h4>
                  <a href="#">Cake Name</a>
                </h4>
                <p>Dummy Copy Dummy Copy Dummy Copy Dummy Copy</p>
                <h5>
                  Price : <span>₹ 1200.00</span>
                </h5>
                <h5>
                  Weight : <span>2 Kg</span> <br className="d-block d-sm-none" />{" "}
                  Flavours : <span>Chocolate</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="item-inner">
                <a href="javascript:;" className="d-block" onClick={handleShow}>
                  <img
                    src={cakeinner}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                </a>
                <h4>
                  <a href="#">Cake Name</a>
                </h4>
                <p>Dummy Copy Dummy Copy Dummy Copy Dummy Copy</p>
                <h5>
                  Price : <span>₹ 1200.00</span>
                </h5>
                <h5>
                  Weight : <span>2 Kg</span> <br className="d-block d-sm-none" />{" "}
                  Flavours : <span>Chocolate</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="item-inner">
                <a href="javascript:;" className="d-block" onClick={handleShow}>
                  <img
                    src={cakeinner}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                </a>
                <h4>
                  <a href="#">Cake Name</a>
                </h4>
                <p>Dummy Copy Dummy Copy Dummy Copy Dummy Copy</p>
                <h5>
                  Price : <span>₹ 1200.00</span>
                </h5>
                <h5>
                  Weight : <span>2 Kg</span> <br className="d-block d-sm-none" />{" "}
                  Flavours : <span>Chocolate</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="item-inner">
                <a href="javascript:;" className="d-block" onClick={handleShow}>
                  <img
                    src={cakeinner}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                </a>
                <h4>
                  <a href="#">Cake Name</a>
                </h4>
                <p>Dummy Copy Dummy Copy Dummy Copy Dummy Copy</p>
                <h5>
                  Price : <span>₹ 1200.00</span>
                </h5>
                <h5>
                  Weight : <span>2 Kg</span> <br className="d-block d-sm-none" />{" "}
                  Flavours : <span>Chocolate</span>
                </h5>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="item-inner">
                <a href="javascript:;" className="d-block" onClick={handleShow}>
                  <img
                    src={cakeinner}
                    alt=""
                    className="img-fluid w-100 mb-4"
                  />
                </a>
                <h4>
                  <a href="#">Cake Name</a>
                </h4>
                <p>Dummy Copy Dummy Copy Dummy Copy Dummy Copy</p>
                <h5>
                  Price : <span>₹ 1200.00</span>
                </h5>
                <h5>
                  Weight : <span>2 Kg</span>
                  <br className="d-block d-sm-none" /> Flavours :{" "}
                  <span>Chocolate</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <a href="javascript:;" className="load-more">
            <div className="chevron" />
            <div className="chevron" />
            <div className="chevron" />
          </a>
        </div>
      </section>
      <Footer />  

      <Modal size="xl" show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Header closeButton>
          <Modal.Title>Cake Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SlideshowLightbox className="slider-grid">
            <img className='sliderImg' src="https://img.freepik.com/free-photo/joyful-birthday-celebration-with-delicious-chocolate-cake-generative-ai_188544-9589.jpg?w=900&t=st=1694798344~exp=1694798944~hmac=38ecf11a6329bcd0cb95753db53a4699d3ec76000f65eac492f151473900732b.jpg" />
            <img className='sliderImg' src={bdc} />
            <img className='sliderImg' src={wdc} />
            <img className='sliderImg' src={anvc} />
            <img className='sliderImg' src={superc} />
            <img className='sliderImg' src={photoc} />
            <img className='sliderImg' src={dreamc} />
            <img className='sliderImg' src={hero} />
            <img className='sliderImg' src={bdc} />
            <img className='sliderImg' src={wdc} />
            <img className='sliderImg' src={anvc} />
            <img className='sliderImg' src={superc} />
            <img className='sliderImg' src={photoc} />
            <img className='sliderImg' src={dreamc} />
          </SlideshowLightbox> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Category
