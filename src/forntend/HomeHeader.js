import React, { useEffect, useState } from 'react'
import "./HomeHeader.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faPhone, faUser, faHeart} from '@fortawesome/free-solid-svg-icons';
import AllCategory from './AllCollectionsCategory/AllCategory';
import Serach from './Serach/Serach';
import { BsBasket} from 'react-icons/bs';
import { FaUser, FaHeart } from 'react-icons/fa';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/js/bootstrap.bundle.min";

const HomeHeader = () => {

   useEffect(() => {
      // Manually initialize Bootstrap dropdown
      const dropdownElementList = document.querySelectorAll('.dropdown-toggle');
      dropdownElementList.forEach(dropdown => {
         new window.bootstrap.Dropdown(dropdown);
      });
   }, []);

   return (
      <>
         <header class="ec-header">
            {/* <!--Ec Header Top Start --> */}
            <div class="header-top">
               <div class="container">
                  <div class="row align-items-center">
                     {/* <!-- Header Top phone Start --> */}
                     <div className="col header-top-center">
                        <div className="header-top-call">
                           <FontAwesomeIcon icon={faPhone} />+91 8559959994
                        </div>
                     </div>
                     {/* <!-- Header Top phone End -->
                    <!-- Header Top call Start --> */}
                     <div class="col header-top-center">
                        <div class="header-top-call">
                           Order online or call us (+1800) 000 8808
                        </div>
                     </div>
                     {/* <!-- Header Top call End -->
                    <!-- Header Top Language Currency --> */}
                     <div class="col header-top-right d-none d-lg-block">
                        <div class="header-top-right-inner d-flex justify-content-end">
                           <div className="header-top-lan-curr header-top-curr dropdown">
                              <button className="dropdown-toggle" data-bs-toggle="dropdown">
                                 USD <FontAwesomeIcon icon={faAngleDown} aria-hidden="true" />
                              </button>
                              <ul className="dropdown-menu">
                                 <li className="active"><a className="dropdown-item" href="#">USD $</a></li>
                                 <li><a className="dropdown-item" href="#">EUR €</a></li>
                              </ul>
                           </div>

                           {/* <!-- Currency End --> */}
                           {/* <!-- Language Start --> */}

                           <div className="header-top-lan-curr header-top-lan dropdown">
                              <button className="dropdown-toggle" data-bs-toggle="dropdown">
                                 ENG <FontAwesomeIcon icon={faAngleDown} aria-hidden="true" />
                              </button>
                              <ul className="dropdown-menu">
                                 <li className="active"><a className="dropdown-item" href="#">English</a></li>
                                 <li><a className="dropdown-item" href="#">Italiano</a></li>
                              </ul>
                           </div>

                           {/* <!-- Language End -->
                            <!-- Social Start --> */}
                           <div className="header-top-social">
                              <ul className="mb-0">
                                 <li className="list-inline-item">
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                 </li>

                                 <li className="list-inline-item">
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                 </li>

                                 <li className="list-inline-item">
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                 </li>

                                 <li className="list-inline-item">
                                    <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                 </li>
                              </ul>
                           </div>
                           {/* <!-- Social End --> */}
                        </div>

                     </div>
                     {/* <!-- Header Top Language Currency -->
                    <!-- Header Top responsive Action --> */}
                     <div class="col header-top-res d-lg-none">
                        <div class="ec-header-bottons">
                           {/* <!-- Header User Start --> */}
                           <div class="ec-header-user dropdown">
                              <button class="dropdown-toggle" data-bs-toggle="dropdown"><i class="fi-rr-user"></i></button>
                              <ul class="dropdown-menu dropdown-menu-right">
                                 <Link to='/register'><li><a class="dropdown-item" href="register.html">Register</a></li></Link>
                                 <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
                                 <Link to='/login'><li><a class="dropdown-item" href="login.html">Login</a></li></Link>
                                 <Link to='/user-profile'><li><a class="dropdown-item" href="userprofile.html">User-Profile</a></li></Link>
                              </ul>
                           </div>
                           {/* <!-- Header User End -->
                            <!-- Header Cart Start --> */}
                           <a href="#" class="ec-header-btn ec-header-wishlist">
                              <div class="header-icon"><i class="fi-rr-heart"></i></div>
                              <span class="ec-header-count ec-wishlist-count">0</span>
                           </a>
                           {/* <!-- Header Cart End -->
                            <!-- Header Cart Start --> */}
                           <a href="#ec-side-cart" class="ec-header-btn ec-side-toggle">
                              <div class="header-icon"><i class="fi-rr-shopping-basket"></i></div>
                              <span class="ec-header-count ec-cart-count">3</span>
                           </a>
                           {/* <!-- Header Cart End -->
                            <!-- Header menu Start --> */}
                           <a href="#ec-mobile-menu" class="ec-header-btn ec-side-toggle ec-d-l d-lg-none">
                              <i class="ecicon eci-bars"></i>
                           </a>
                           {/* <!-- Header menu End --> */}

                        </div>
                     </div>
                     {/* <!-- Header Top responsive Action --> */}
                  </div>
               </div>
            </div>
            {/* <!-- Ec Header Top  End -->
        <!-- Ec Header Bottom  Start --> */}


            <div class="ec-header-bottom d-none d-lg-block">
               <div class="container position-relative">
                  <div class="row">
                     <div class="header-bottom-flex">



                        <Serach />



                        <Link to='/'>  <div class="align-self-center ec-header-logo " style={{ marginTop: '30px' }}>
                           <div class="header-logo">
                              <a href="index.html"><img src="assets/images/logo/logo-3.webp"
                                 alt="Site Logo" /><img class="dark-logo"
                                    src="assets/images/logo/dark-logo-3.webp" alt="Site Logo"
                                    style={{ "display": "none" }} /></a>
                           </div>
                        </div>
                        </Link>


                        <div className="align-self-center ec-header-cart flex-row-reverse custom-header">
                           <div className="ec-header-bottons">
                              {/* Header User Start */}
                              <div className="ec-header-user dropdown">
                                 <button className="dropdown-toggle" data-bs-toggle="dropdown">
                                    <FontAwesomeIcon icon={faUser} />
                                 </button>
                                 <ul className="dropdown-menu dropdown-menu-right">
                                    <li><Link className="dropdown-item" to="/register">Register</Link></li>
                                    <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/user-profile">UserProfile</Link></li>
                                 </ul>
                              </div>
                              {/* Header User End */}
                              {/* Header Wishlist Start */}
                             <Link to='/wishlist'><a href="#" className="ec-header-btn ec-header-wishlist">
                                 <div className="header-icon">
                                    <FontAwesomeIcon icon={faHeart} />
                                 </div>
                                 <span className="ec-header-count ec-cart-wishlist">0</span>
                              </a>
                              </Link> 
                              {/* Header Wishlist End */}
                              {/* Header Cart Start */}
                             <Link to='/add-to-cart'> <a href="#ec-side-cart" className="ec-header-btn ec-side-toggle">
                                 <div className="header-icon">
                                 <FontAwesomeIcon icon={faBasketShopping} />
                                 </div>
                                 <span className="ec-header-count ec-cart-count">3</span>
                              </a>
                              </Link>
                              {/* Header Cart End */}
                           </div>
                        </div>


                     </div>

                  </div>
               </div>
            </div>









            <div id="ec-main-menu-desk" class="sticky-nav">
               <div class="container position-relative">
                  <div class="row">
                     <div class="col-sm-12 ec-main-menu-block align-self-center d-none d-lg-block">
                        <div class="ec-main-menu">
                           <ul>
                              <Link to='/'><li><a href="javascript:void(0)">Home</a></li></Link>
                              {/* <li class="dropdown position-static"><a href="javascript:void(0)">All Collection</a>
                                 <ul class="mega-menu d-block">
                                    <Link to='/category'> <li class="d-flex">
                                       <ul class="d-block">

                                          <li><a href="./category">Cotton Suit Sets</a>
                                          </li>
                                          <li><a href="./category.html">Dresses</a>
                                          </li>
                                          <li><a href="./category.html">Dupattas</a>
                                          </li>
                                          <li><a href="./category.html">Kurta Sets</a>
                                          </li>
                                          <li><a href="./category.html">Lehengas</a></li>
                                          <li><a href="./category.html">Maxis</a></li>
                                          <li><a href="./category.html">Raw Fabrics</a></li>




                                       </ul>
                                       <ul class="d-block">

                                          <li><a href="./category.html">Sarees</a></li>
                                          <li><a href="./category.html">Shrug Sets</a></li>
                                          <li><a href="./category.html">Steal Deals</a></li>
                                          <li><a href="./category.html">Suit Sets</a></li>
                                          <li><a href="./category.html">Tops & Co-ord Set</a></li>
                                          <li><a href="./category.html">Unstitched Suit Sets</a></li>
                                          <li><a href="./category.html">Unstitched Suits</a></li>

                                       </ul>
                                       <ul class="d-block">
                                          <li class="menu_title"><img src="./assets/images/banner/menu1.webp" /></li>
                                       </ul>
                                       <ul class="d-block">
                                          <li class="menu_title"><img src="./assets/images/banner/menu2.webp" />
                                          </li>
                                       </ul>
                                    </li> </Link>



                                 </ul>
                              </li> */}

                              <AllCategory />

                              <Link to='/home-product'>   <li class="dropdown"><a href="javascript:void(0)">Products</a>
                                 <ul class="sub-menu">

                                    {/* <li class="dropdown position-static"><a href="javascript:void(0)">Product page
                                       <i class="ecicon eci-angle-right"></i></a>
                                       <ul class="sub-menu sub-menu-child">
                                          <li><a href="product-left-sidebar.html">Product left sidebar</a></li>
                                          <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                       </ul>
                                    </li> */}

                                 </ul>
                              </li>
                              </Link>
                              <li class="dropdown"><a href="javascript:void(0)">Pages</a>
                                 <ul class="sub-menu">
                                    <Link to='/about-us'><li><a href="about-us.html">About Us</a></li></Link>
                                    <Link to='/contact-us'><li><a href="contact-us.html">Contact Us</a></li></Link>
                                    <Link to='/add-to-cart'><li><a href="cart.html">Cart</a></li></Link>
                                    <Link to='/checkout'><li><a href='/checkout.html'>Checkout</a></li></Link>
                                    {/* <li><a href="compare.html">Compare</a></li> */}
                                    <li><a href="faq.html">FAQ</a></li>
                                    {/* <Link to='/login'><li><a href="login.html">Login</a></li></Link>
                                    <Link to='/register'><li><a href="register.html">Register</a></li></Link> */}
                                    <Link to='/track-order'><li><a href="track-order.html">Track Order</a></li></Link>
                                    <li><a href="terms-condition.html">Terms Condition</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                 </ul>
                              </li>

                              <Link to='/blogs'><li class="dropdown"><a href="javascript:void(0)">Blog</a>
                                 <ul className='sub-menu'>
                                    {/* <li class="dropdown position-static"><a href="javascript:void(0)">Product page
                                       <i class="ecicon eci-angle-right"></i></a>
                                       <ul class="sub-menu sub-menu-child">
                                          <li><a href="product-left-sidebar.html">Product left sidebar</a></li>
                                          <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                       </ul>
                                    </li> */}
                                 </ul>

                              </li>
                              </Link>

                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- Ec Main Menu End -->
        <!-- Ekka Menu Start --> */}


            <div id="ec-mobile-menu" class="ec-side-cart ec-mobile-menu">
               <div class="ec-menu-title">
                  <span class="menu_title">My Menu</span>
                  <button class="ec-close">×</button>
               </div>
               <div class="ec-menu-inner">
                  <div class="ec-menu-content">
                     <ul>
                        <li><a href="javascript:void(0)">Home</a></li>

                        <li><a href="javascript:void(0)">Categories</a>
                           <ul class="sub-menu">
                              <li>
                                 <a href="javascript:void(0)">Classic Variation</a>
                                 <ul class="sub-menu">
                                    <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a></li>
                                    <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a></li>
                                    <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a></li>
                                    <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a></li>
                                    <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">Classic Variation</a>
                                 <ul class="sub-menu">
                                    <li><a href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                                       column</a></li>
                                    <li><a href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                                       column</a></li>
                                    <li><a href="shop-banner-right-sidebar-col-3.html">Banner right sidebar 3
                                       column</a></li>
                                    <li><a href="shop-banner-right-sidebar-col-4.html">Banner right sidebar 4
                                       column</a></li>
                                    <li><a href="shop-banner-full-width.html">Banner Full width 4 column</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">Columns Variation</a>
                                 <ul class="sub-menu">
                                    <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                                    <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                                    <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                                    <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                                    <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a href="javascript:void(0)">List Variation</a>
                                 <ul class="sub-menu">
                                    <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                                    <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                                    <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a></li>
                                    <li><a href="shop-list-banner-right-sidebar.html">Banner right sidebar</a></li>
                                    <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                                 </ul>
                              </li>
                              <li><a class="p-0" href="shop-left-sidebar-col-3.html"><img class="img-responsive"
                                 src="assets/images/menu-banner/1.jpg" alt="" /></a>
                              </li>
                           </ul>
                        </li>
                        {/* <li><a href="javascript:void(0)">Products</a>
                           <ul class="sub-menu">
                              <li><a href="javascript:void(0)">Product page</a>
                                 <ul class="sub-menu">
                                    <li><a href="product-left-sidebar.html">Product left sidebar</a></li>
                                    <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">Product 360</a>
                                 <ul class="sub-menu">
                                    <li><a href="product-360-left-sidebar.html">360 left sidebar</a></li>
                                    <li><a href="product-360-right-sidebar.html">360 right sidebar</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">Product vodeo</a>
                                 <ul class="sub-menu">
                                    <li><a href="product-video-left-sidebar.html">vodeo left sidebar</a></li>
                                    <li><a href="product-video-right-sidebar.html">vodeo right sidebar</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">Product gallery</a>
                                 <ul class="sub-menu">
                                    <li><a href="product-gallery-left-sidebar.html">Gallery left sidebar</a></li>
                                    <li><a href="product-gallery-right-sidebar.html">Gallery right sidebar</a></li>
                                 </ul>
                              </li>
                              <li><a href="product-full-width.html">Product full width</a></li>
                              <li><a href="product-360-full-width.html">360 full width</a></li>
                              <li><a href="product-video-full-width.html">Video full width</a></li>
                              <li><a href="product-gallery-full-width.html">Gallery full width</a></li>
                           </ul>
                        </li> */}
                        <li><a href="javascript:void(0)">Others</a>
                           <ul class="sub-menu">
                              <li><a href="javascript:void(0)">Mail Confirmation</a>
                                 <ul class="sub-menu">
                                    <li><a href="email-template-confirm-1.html">Mail Confirmation 1</a></li>
                                    <li><a href="email-template-confirm-2.html">Mail Confirmation 2</a></li>
                                    <li><a href="email-template-confirm-3.html">Mail Confirmation 3</a></li>
                                    <li><a href="email-template-confirm-4.html">Mail Confirmation 4</a></li>
                                    <li><a href="email-template-confirm-5.html">Mail Confirmation 5</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">Mail Reset password</a>
                                 <ul class="sub-menu">
                                    <li><a href="email-template-forgot-password-1.html">Reset password 1</a></li>
                                    <li><a href="email-template-forgot-password-2.html">Reset password 2</a></li>
                                    <li><a href="email-template-forgot-password-3.html">Reset password 3</a></li>
                                    <li><a href="email-template-forgot-password-4.html">Reset password 4</a></li>
                                    <li><a href="email-template-forgot-password-5.html">Reset password 5</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">Mail Promotional</a>
                                 <ul class="sub-menu">
                                    <li><a href="email-template-offers-1.html">Offer Mail 1</a></li>
                                    <li><a href="email-template-offers-2.html">Offer Mail 2</a></li>
                                    <li><a href="email-template-offers-3.html">Offer Mail 3</a></li>
                                    <li><a href="email-template-offers-4.html">Offer Mail 4</a></li>
                                    <li><a href="email-template-offers-5.html">Offer Mail 5</a></li>
                                    <li><a href="email-template-offers-6.html">Offer Mail 6</a></li>
                                    <li><a href="email-template-offers-7.html">Offer Mail 7</a></li>
                                    <li><a href="email-template-offers-8.html">Offer Mail 8</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">Vendor Account Pages</a>
                                 <ul class="sub-menu">
                                    <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                    <li><a href="vendor-profile.html">Vendor Profile</a></li>
                                    <li><a href="vendor-uploads.html">Vendor Uploads</a></li>
                                    <li><a href="vendor-settings.html">Vendor Settings</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">User Account Pages</a>
                                 <ul class="sub-menu">
                                    <li><a href="user-profile.html">User Profile</a></li>
                                    <li><a href="user-history.html">User History</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="track-order.html">Track Order</a></li>
                                    <li><a href="user-invoice.html">User Invoice</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">Construction Pages</a>
                                 <ul class="sub-menu">
                                    <li><a href="404-error-page.html">404 Error Page</a></li>
                                    <li><a href="under-maintenance.html">Maintenance Page</a></li>
                                    <li><a href="coming-soon.html">Comming Soon Page</a></li>
                                 </ul>
                              </li>
                              <li><a href="javascript:void(0)">Vendor Catalog Pages</a>
                                 <ul class="sub-menu">
                                    <li><a href="catalog-single-vendor.html">Catalog Single Vendor</a></li>
                                    <li><a href="catalog-multi-vendor.html">Catalog Multi Vendor</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </li>
                        <li><a href="javascript:void(0)">Pages</a>
                           <ul class="sub-menu">
                              <Link to='/about-us'><li><a href="about-us.html">About Us</a></li></Link>
                              <Link to='/contact-us'> <li><a href="contact-us.html">Contact Us</a></li></Link>
                              <Link to='/cart'><li><a href="cart.html">Cart</a></li></Link>
                              <Link to='/checkout'><li><a href='checkout.html'>Checkout</a></li></Link>
                              <li><a href="compare.html">Compare</a></li>
                              <li><a href="faq.html">FAQ</a></li>
                              {/* <Link to='/login'><li><a href="login.html">Login</a></li></Link>
                              <Link to='/register'><li><a href="register.html">Register</a></li></Link> */}
                              <Link to='/track-order'><li><a href="track-order.html">Track Order</a></li></Link>
                              <li><a href="terms-condition.html">Terms Condition</a></li>
                              <li><a href="privacy-policy.html">Privacy Policy</a></li>
                           </ul>
                        </li>
                        <li class="dropdown"><a href="javascript:void(0)">Blog</a>
                           <ul class="sub-menu">
                              <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                              <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                              <li><a href="blog-detail-left-sidebar.html">Blog detail left sidebar</a></li>
                              <li><a href="blog-detail-right-sidebar.html">Blog detail right sidebar</a></li>
                              <li><a href="blog-full-width.html">Blog full width</a></li>
                              <li><a href="blog-detail-full-width.html">Blog detail full width</a></li>
                           </ul>
                        </li>
                        <li class="dropdown"><a href="javascript:void(0)">Elements</a>
                           <ul class="sub-menu">
                              <Link to='/home-product'><li><a href="elemets-products.html">Products</a></li></Link>
                              <li><a href="elemets-typography.html">Typography</a></li>
                              <li><a href="elemets-title.html">Titles</a></li>
                              <li><a href="elemets-categories.html">Categories</a></li>
                              <li><a href="elemets-buttons.html">Buttons</a></li>
                              <li><a href="elemets-tabs.html">Tabs</a></li>
                              <li><a href="elemets-accordions.html">Accordions</a></li>
                              <li><a href="elemets-blog.html">Blogs</a></li>
                           </ul>
                        </li>
                        {/* <li><a href="offer.html">Hot Offers</a></li> */}
                     </ul>
                  </div>
                  <div class="header-res-lan-curr">
                     <div class="header-top-lan-curr">
                        {/* <!-- Language Start --> */}
                        <div class="header-top-lan dropdown">
                           <button class="dropdown-toggle text-upper" data-bs-toggle="dropdown">Language <i
                              class="ecicon eci-caret-down" aria-hidden="true"></i></button>
                           <ul class="dropdown-menu">
                              <li class="active"><a class="dropdown-item" href="#">English</a></li>
                              <li><a class="dropdown-item" href="#">Italiano</a></li>
                           </ul>
                        </div>
                        {/* <!-- Language End -->
                        <!-- Currency Start --> */}
                        <div class="header-top-curr dropdown">
                           <button class="dropdown-toggle text-upper" data-bs-toggle="dropdown">Currency <i
                              class="ecicon eci-caret-down" aria-hidden="true"></i></button>
                           <ul class="dropdown-menu">
                              <li class="active"><a class="dropdown-item" href="#">USD $</a></li>
                              <li><a class="dropdown-item" href="#">EUR €</a></li>
                           </ul>
                        </div>
                        {/* <!-- Currency End --> */}
                     </div>
                     {/* <!-- Social Start --> */}
                     <div class="header-res-social">
                        <div class="header-top-social">
                           <ul class="mb-0">
                              <li class="list-inline-item"><a href="#"><i class="ecicon eci-facebook"></i></a></li>
                              <li class="list-inline-item"><a href="#"><i class="ecicon eci-twitter"></i></a></li>
                              <li class="list-inline-item"><a href="#"><i class="ecicon eci-instagram"></i></a></li>
                              <li class="list-inline-item"><a href="#"><i class="ecicon eci-linkedin"></i></a></li>
                           </ul>
                        </div>
                     </div>
                     {/* <!-- Social End --> */}
                  </div>
               </div>
            </div>
            {/* <!-- Ekka Menu End --> */}


         </header>








      </>
   )
}

export default HomeHeader