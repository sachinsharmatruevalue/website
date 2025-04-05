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
import AddtoCartServices from '../services/AddtoCart';

export default function Home() {
   const [cartCount, setCartCount] = useState(0);

   const fetchCart = async () => {
    try {
      const response = await AddtoCartServices.getAllCart();
      const cart = response.data?.data?.[0]; // Get the first cart
      const items = cart?.items || [];
      const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalQuantity);
     
    } catch (err) {
      console.error("Failed to fetch cart count", err);
    }
  };

   return (
      <div className='Container'>
         <HomeHeader  cartCount={cartCount}/>
         
         <Slider /> 
         <HomeCategory />
         <HomeBanner />
         <HomeProduct  onCartUpdate={fetchCart} />
         <SaleBanner />
          <TradingHomeProduct />
         {/* <TreadingBanner />
         <SareeBanner />
         <SaleProduct/>
         <OfferBanner/> */}
         <Service/>  
         <Footer />
      </div>

   )
}
