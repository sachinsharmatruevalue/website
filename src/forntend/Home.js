import React, { useEffect, useState } from 'react'
import HomeHeader from './HomeHeader'
import Footer from './Footer'
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
// import { Slider } from 'antd';
import Slider from '../forntend/Slider/Slider'
import HomeCategory from '../forntend/category/HomeCategory'
import HomeBanner from '../forntend/banner/HomeBanner'
import HomeProduct from '../forntend/product/HomeProduct'
import SaleBanner from '../forntend/banner/SaleBanner'
import TradingHomeProduct from '../forntend/product/TreadingHomeProduct';
import TreadingBanner from '../forntend/banner/TreadingBanner'
import SareeBanner from '../forntend/banner/SareeBanner'
import SaleProduct from '../forntend/product/SaleProduct';
import OfferBanner from '../forntend/banner/OfferBanner';
import Service from '../forntend/Service/Service';


export default function Home() {


   return (
      <div className='Container'>
         {/* <div id="ec-overlay">
            <div class="ec-ellipsis">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
         </div> */}
         <HomeHeader />
         <div class="ec-side-cart-overlay"></div>
         <div id="ec-side-cart" class="ec-side-cart">
            <div class="ec-cart-inner">
               <div class="ec-cart-top">
                  <div class="ec-cart-title">
                     <span class="cart_title">My Cart</span>
                     <button class="ec-close">×</button>
                  </div>
                  <ul class="eccart-pro-items">
                     <li>
                        <a href="product-left-sidebar.html" class="sidecart_pro_img"><img
                           src="assets/images/product-image/19_1.jpg" alt="product" /></a>
                        <div class="ec-pro-content">
                           <a href="single-product-left-sidebar.html" class="cart_pro_title">Single Sofa Chair</a>
                           <span class="cart-price"><span>$450</span> x 1</span>
                           <div class="qty-plus-minus">
                              <input class="qty-input" type="text" name="ec_qtybtn" value="1" />
                           </div>
                           <a href="#" class="remove">×</a>
                        </div>
                     </li>
                     <li>
                        <a href="product-left-sidebar.html" class="sidecart_pro_img"><img
                           src="assets/images/product-image/20_1.jpg" alt="product" /></a>
                        <div class="ec-pro-content">
                           <a href="product-left-sidebar.html" class="cart_pro_title">Jabra Night lamp</a>
                           <span class="cart-price"><span>$450</span> x 1</span>
                           <div class="qty-plus-minus">
                              <input class="qty-input" type="text" name="ec_qtybtn" value="1" />
                           </div>
                           <a href="#" class="remove">×</a>
                        </div>
                     </li>
                     <li>
                        <a href="product-left-sidebar.html" class="sidecart_pro_img"><img
                           src="assets/images/product-image/21_1.jpg" alt="product" /></a>
                        <div class="ec-pro-content">
                           <a href="product-left-sidebar.html" class="cart_pro_title">Kambrook classic Chairs</a>
                           <span class="cart-price"><span>$450</span> x 1</span>
                           <div class="qty-plus-minus">
                              <input class="qty-input" type="text" name="ec_qtybtn" value="1" />
                           </div>
                           <a href="#" class="remove">×</a>
                        </div>
                     </li>
                  </ul>
               </div>
               <div class="ec-cart-bottom">
                  <div class="cart-sub-total">
                     <table class="table cart-table">
                        <tbody>
                           <tr>
                              <td class="text-left">Sub-Total :</td>
                              <td class="text-right">$1350.00</td>
                           </tr>
                           <tr>
                              <td class="text-left">VAT (20%) :</td>
                              <td class="text-right">$270.00</td>
                           </tr>
                           <tr>
                              <td class="text-left">Total :</td>
                              <td class="text-right primary-color">$1620.00</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="cart_btn">
                     <a href="cart.html" class="btn btn-primary">View Cart</a>
                     <a href="checkout.html" class="btn btn-secondary">Checkout</a>
                  </div>
               </div>
            </div>

         </div>
         <Slider /> 
         <HomeCategory />
         <HomeBanner />
         <HomeProduct />
         <SaleBanner />
         <TradingHomeProduct />
         <TreadingBanner />
         <SareeBanner />
         <SaleProduct/>
         <OfferBanner/>
         <Service/>
         <Footer />
      </div>

   )
}
