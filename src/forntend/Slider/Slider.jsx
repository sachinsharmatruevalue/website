import React from 'react';
import "./Slider.css"; // Assuming your styles are in this file
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const Slider = () => {
  return (
    <Carousel autoPlay interval={800} infiniteLoop>
      <div class="ec-main-slider section section-space-mb">
        <div class="ec-slider">
          <div class="ec-slide-item d-flex slide-1">
            <img src="assets/images/main-slider-banner/arrow-7.png" class="main_banner_arrow_img" alt="" />
            <div class="container align-self-center">
              <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                  <div class="ec-slide-content slider-animation">
                    <h2 class="ec-slide-stitle">Stylish & comfort</h2>
                    <h1 class="ec-slide-title">Living Sofas</h1>
                    <p>Introducing Apple Watch Series 4. Fundamentally redesigned and re-engineered to help
                      you stay even more active, healthy, and connected.</p>
                    <span class="ec-slide-disc">Starting @<span>$150</span></span>
                    <a href="#" class="btn btn-lg btn-secondary">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ec-slide-item d-flex slide-2">
            <img src="assets/images/main-slider-banner/arrow-8.png" class="main_banner_arrow_img" alt="" />
            <div class="container align-self-center">
              <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                  <div class="ec-slide-content slider-animation">
                    <h2 class="ec-slide-stitle">Stylish & comfort</h2>
                    <h1 class="ec-slide-title">Living Couch</h1>
                    <p>Introducing Apple Watch Series 4. Fundamentally redesigned and re-engineered to help
                      you stay even more active, healthy, and connected.</p>
                    <span class="ec-slide-disc">Starting @<span>$150</span></span>
                    <a href="#" class="btn btn-lg btn-secondary">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ec-slide-item d-flex slide-3">
            <img src="assets/images/main-slider-banner/arrow-9.png" class="main_banner_arrow_img" alt="" />
            <div class="container align-self-center">
              <div class="row">
                <div class="col-xl-6 col-lg-7 col-md-7 col-sm-7 align-self-center">
                  <div class="ec-slide-content slider-animation">
                    <h2 class="ec-slide-stitle">Stylish & comfort</h2>
                    <h1 class="ec-slide-title">Garden Chair</h1>
                    <p>Introducing Apple Watch Series 4. Fundamentally redesigned and re-engineered to help
                      you stay even more active, healthy, and connected.</p>
                    <span class="ec-slide-disc">Starting @<span>$150</span></span>
                    <a href="#" class="btn btn-lg btn-secondary">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
