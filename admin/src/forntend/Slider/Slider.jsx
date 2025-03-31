import React from 'react';
import "./Slider.css"; // Assuming your styles are in this file
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Slider = () => {
  return (
    <Carousel autoPlay interval={800} infiniteLoop>
      <div className="ec-main-slider section section-space-mb">
        <div className="ec-slider">
          <div className="ec-slide-item d-flex slide-1">
            <img
              src="assets/images/main-slider-banner 1.jpg"
              className="main_banner_arrow_img"
              alt="Slider 1"
            />
            <div className="container align-self-center">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                  <div className="ec-slide-content slider-animation">
                    <h2 className="ec-slide-stitle">Stylish & Comfort</h2>
                    <h1 className="ec-slide-title">Living Sofas</h1>
                    <p>
                      Introducing Apple Watch Series 4. Fundamentally redesigned and
                      re-engineered to help you stay even more active, healthy, and
                      connected.
                    </p>
                    <span className="ec-slide-disc">
                      Starting @<span>$150</span>
                    </span>
                    <a href="#" className="btn btn-lg btn-secondary">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ec-slide-item d-flex slide-2">
        <img
          src="assets/images/main-slider-banner/arrow-8.png"
          className="main_banner_arrow_img"
          alt="Slider 2"
        />
        <div className="container align-self-center">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
              <div className="ec-slide-content slider-animation">
                <h2 className="ec-slide-stitle">Stylish & Comfort</h2>
                <h1 className="ec-slide-title">Living Couch</h1>
                <p>
                  Introducing Apple Watch Series 4. Fundamentally redesigned and
                  re-engineered to help you stay even more active, healthy, and
                  connected.
                </p>
                <span className="ec-slide-disc">
                  Starting @<span>$150</span>
                </span>
                <a href="#" className="btn btn-lg btn-secondary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ec-slide-item d-flex slide-3">
        <img
          src="assets/images/main-slider-banner/arrow-9.png"
          className="main_banner_arrow_img"
          alt="Slider 3"
        />
        <div className="container align-self-center">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
              <div className="ec-slide-content slider-animation">
                <h2 className="ec-slide-stitle">Stylish & Comfort</h2>
                <h1 className="ec-slide-title">Garden Chair</h1>
                <p>
                  Introducing Apple Watch Series 4. Fundamentally redesigned and
                  re-engineered to help you stay even more active, healthy, and
                  connected.
                </p>
                <span className="ec-slide-disc">
                  Starting @<span>$150</span>
                </span>
                <a href="#" className="btn btn-lg btn-secondary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
