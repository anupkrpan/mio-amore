import React from "react";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";

import "../../maincss.css";

import logo from "../../images/logo.webp";
import hero from "../../images/hero-cake.webp";
import bdc from "../../images/birthday-cake.webp";
import wdc from "../../images/wedding-cake.webp";
import anvc from "../../images/anniversary-cake.webp";
import superc from "../../images/superhero-cake.webp";
import photoc from "../../images/photo-cake.webp";
import dreamc from "../../images/dream-shape-cake.webp";
import icon1 from "../../images/icons/1.webp";
import icon2 from "../../images/icons/2.webp";
import icon3 from "../../images/icons/3.webp";
import icon4 from "../../images/icons/4.webp";
import icon5 from "../../images/icons/5.webp";
import icon6 from "../../images/icons/6.webp";
import icon7 from "../../images/icons/7.webp";
import icon8 from "../../images/icons/8.webp";
import icon9 from "../../images/icons/9.webp";
import icon10 from "../../images/icons/10.webp";

// function Home = () => {
function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container-fluid position-relative">
          <div className="logo">
            <img src={logo} alt="" className="img-fluid" />
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <img src={hero} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-md-6 align-self-center text-center text-md-start">
              <h1>
                Customised Cakes <br />
                for Special&nbsp;Moments
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-uppercase text-primary text-center">
                Exclusively Crafted Cakes
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="icon-left">
          <img src={icon1} alt="" />
        </div>
        <div className="icon-right">
          <img src={icon2} alt="" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <img src={bdc} alt="" className="img-fluid w-100" />
            </div>
            <div className="offset-lg-1 col-md-6 align-self-center text-center text-md-start">
              <h2>Birthday Cakes</h2>
              <p>
                Birthdays come only once a year! Whatever your age be, you
                deserve a big celebration involving a delish cake. These could
                be customized to your preferences.
              </p>
              <Link to="/category" className="btn btn-primary">
                See More <i className="la la-angle-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="icon-left">
          <img src={icon3} alt="" />
        </div>
        <div className="icon-right">
          <img src={icon4} alt="" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-6 mb-4 mb-md-0 order-1 order-md-2">
              <img src={wdc} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-md-6 order-2 order-md-1 align-self-center text-center text-md-start">
              <h2>Wedding Cakes</h2>
              <p>
                Seal your wedding vows with our exquisite wedding themed cakes.
                Big, delicious and elegant, these cakes will add a twist of
                extravagance to your special day.
              </p>
              <Link to="/category" className="btn btn-primary">
                See More <i className="la la-angle-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="icon-left">
          <img src={icon5} alt="" />
        </div>
        <div className="icon-right">
          <img src={icon6} alt="" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <img src={anvc} alt="" className="img-fluid w-100" />
            </div>
            <div className="offset-lg-1 col-md-6 align-self-center text-center text-md-start">
              <h2>Anniversary Cakes</h2>
              <p>
                Make a toast to your everlasting bond with some fluffy, moist
                deliciousness. Mio Amore Anniversary Cakes are no doubt great
                additions to the celebration of your special day.
              </p>
              <Link to="/category" className="btn btn-primary">
                See More <i className="la la-angle-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="home-newly-launch my-4 my-md-5">
        <h1>Newly Launched</h1>
      </section>
      <section className="sec">
        <div className="icon-left">
          <img src={icon7} alt="" />
        </div>
        <div className="icon-right">
          <img src={icon8} alt="" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <img src={superc} alt="" className="img-fluid w-100" />
            </div>
            <div className="offset-lg-1 col-md-6 align-self-center text-center text-md-start">
              <h2>Super Hero Cakes</h2>
              <p>
                Are you or your little one a superhero fan? Then the super hero
                themed cakes are just for you! Designed in signature poses of
                your favourite action heroes, these cakes are impressive in
                their deliciousness as well.
              </p>
              <Link to="/category" className="btn btn-primary">
                See More <i className="la la-angle-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="icon-left">
          <img src={icon10} alt="" />
        </div>
        <div className="icon-right">
          <img src={icon10} alt="" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-6 mb-4 mb-md-0 order-1 order-md-2">
              <img src={photoc} alt="" className="img-fluid w-100" />
            </div>
            <div className="col-md-6 order-2 order-md-1 align-self-center text-center text-md-start">
              <h2>Photo Cakes</h2>
              <p>
                We can't go back in time but a photograph can no less make time
                travel possible! Recreate a special memory of yours with a photo
                themed cake.{" "}
              </p>
              <Link to="/category" className="btn btn-primary">
                See More <i className="la la-angle-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="icon-left">
          <img src={icon1} alt="" />
        </div>
        <div className="icon-right">
          <img src={icon2} alt="" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
              <img src={dreamc} alt="" className="img-fluid w-100" />
            </div>
            <div className="offset-lg-1 col-md-6 align-self-center text-center text-md-start">
              <h2>Dream Shape Cakes</h2>
              <p>
                Mio Amore Dream Cakes are tiered, extravagantly put together
                that will transport you to the land of your fairytales. Their
                flavours and textures will tickle your taste buds in every bite.
              </p>
              <Link to="/category" className="btn btn-primary">
                See More <i className="la la-angle-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
