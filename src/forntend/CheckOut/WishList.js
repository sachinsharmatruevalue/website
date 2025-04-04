import axios from 'axios'
import React, { useEffect, useState } from 'react';
import HomeHeader from '../HomeHeader';
import Footer from '../Footer';

const WishList = () => {
    // const [wishlist, setWishlist] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    // const addWishlist = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const response = await axios.post(`http://192.168.0.26:4000/api/wishlist/add-wishlist`)
    //         setWishlist(response.data);
    //         setLoading(false);
    //     }
    //     catch (error) {
    //         setError(error.message);
    //         setLoading(false);
    //     }
    //     addWishlist();
    // };
    return (
        <>
            <HomeHeader />

            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        {/* Compare Content Start */}
                        <div className="ec-wish-rightside col-lg-12 col-md-12">
                            {/* Compare content Start */}
                            <div className="ec-compare-content">
                                <div className="ec-compare-inner">
                                    <div className="row margin-minus-b-30">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                            <div className="ec-product-inner">
                                                <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image" style={{'-webkit - transition':' all 0.3s ease 0s',
                                                'transition': 'all 0.3s ease 0s',
                                               ' z-index': '8',
                                              '  position': 'relative'
                                                }}>
                                                    <a href="product-left-sidebar.html" className="image">
                                                        <img
                                                            className="main-image"
                                                            src="assets/images/product-image/7_1.jpg"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/7_2.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <span className="ec-com-remove ec-remove-wish">
                                                        <a href="javascript:void(0)">×</a>
                                                    </span>
                                                    <span className="percentage">20%</span>
                                                    <a
                                                        href="#"
                                                        className="quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ec_quickview_modal"
                                                    >
                                                        <i className="fi-rr-eye" />
                                                    </a>
                                                    <div className="ec-pro-actions">
                                                        <a
                                                            href="compare.html"
                                                            className="ec-btn-group compare"
                                                            title="Compare"
                                                        >
                                                            <i className="fi fi-rr-arrows-repeat" />
                                                        </a>
                                                        <button title="Add To Cart" className="add-to-cart">
                                                            <i className="fi-rr-shopping-basket" /> Add To Cart
                                                        </button>
                                                        <a className="ec-btn-group wishlist" title="Wishlist">
                                                            <i className="fi-rr-heart" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content" style={{'position': 'relative','z-index':'7',' display': '-webkit-box', ' display': '-ms-flexbox', ' display': 'Flex', '-webkit-box-orient': 'vertical','-webkit-box-direction':' normal',  '-ms-flex-direction': 'column', ' flex-direction': 'column', ' padding': '11px 0 0', '-webkit-transition': 'all 0.3s ease 0s','transition': 'all 0.3s ease 0s','text-align': 'left','background-color':' #ffffff', 'letter-spacing': '0.6px'}}>
                                                <h5 className="ec-pro-title">
                                                    <a href="product-left-sidebar.html">Full Sleeve Shirt</a>
                                                </h5>
                                                <div className="ec-pro-rating">
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star" />
                                                </div>
                                                <div className="ec-pro-list-desc">
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum is simply dutmmy text
                                                    ever since the 1500s, when an unknown printer took a
                                                    galley.
                                                </div>
                                                <span className="ec-price">
                                                    <span className="old-price">$12.00</span>
                                                    <span className="new-price">$10.00</span>
                                                </span>
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-color">
                                                        <span className="ec-pro-opt-label">Color</span>
                                                        <ul className="ec-opt-swatch ec-change-img">
                                                            <li className="active">
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/7_1.jpg"
                                                                    data-src-hover="assets/images/product-image/7_1.jpg"
                                                                    data-tooltip="Gray"
                                                                >
                                                                    <span style={{ backgroundColor: "#01f1f1" }} />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/7_2.jpg"
                                                                    data-src-hover="assets/images/product-image/7_2.jpg"
                                                                    data-tooltip="Orange"
                                                                >
                                                                    <span style={{ backgroundColor: "#b89df8" }} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ec-pro-size">
                                                        <span className="ec-pro-opt-label">Size</span>
                                                        <ul className="ec-opt-size">
                                                            <li className="active">
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-sz"
                                                                    data-old="$12.00"
                                                                    data-new="$10.00"
                                                                    data-tooltip="Small"
                                                                >
                                                                    S
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-sz"
                                                                    data-old="$15.00"
                                                                    data-new="$12.00"
                                                                    data-tooltip="Medium"
                                                                >
                                                                    M
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-sz"
                                                                    data-old="$20.00"
                                                                    data-new="$17.00"
                                                                    data-tooltip="Extra Large"
                                                                >
                                                                    XL
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-left-sidebar.html" className="image">
                                                        <img
                                                            className="main-image"
                                                            src="assets/images/product-image/1_1.jpg"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/1_2.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <span className="ec-com-remove ec-remove-wish">
                                                        <a href="javascript:void(0)">×</a>
                                                    </span>
                                                    <span className="percentage">20%</span>
                                                    <a
                                                        href="#"
                                                        className="quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ec_quickview_modal"
                                                    >
                                                        <i className="fi-rr-eye" />
                                                    </a>
                                                    <div className="ec-pro-actions">
                                                        <a
                                                            href="compare.html"
                                                            className="ec-btn-group compare"
                                                            title="Compare"
                                                        >
                                                            <i className="fi fi-rr-arrows-repeat" />
                                                        </a>
                                                        <button title="Add To Cart" className="add-to-cart">
                                                            <i className="fi-rr-shopping-basket" /> Add To Cart
                                                        </button>
                                                        <a className="ec-btn-group wishlist" title="Wishlist">
                                                            <i className="fi-rr-heart" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <h5 className="ec-pro-title">
                                                    <a href="product-left-sidebar.html">Cute Baby Toy's</a>
                                                </h5>
                                                <div className="ec-pro-rating">
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star" />
                                                </div>
                                                <div className="ec-pro-list-desc">
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum is simply dutmmy text
                                                    ever since the 1500s, when an unknown printer took a
                                                    galley.
                                                </div>
                                                <span className="ec-price">
                                                    <span className="old-price">$40.00</span>
                                                    <span className="new-price">$30.00</span>
                                                </span>
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-color">
                                                        <span className="ec-pro-opt-label">Color</span>
                                                        <ul className="ec-opt-swatch ec-change-img">
                                                            <li className="active">
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/1_1.jpg"
                                                                    data-src-hover="assets/images/product-image/1_1.jpg"
                                                                    data-tooltip="Gray"
                                                                >
                                                                    <span style={{ backgroundColor: "#90cdf7" }} />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/1_2.jpg"
                                                                    data-src-hover="assets/images/product-image/1_2.jpg"
                                                                    data-tooltip="Orange"
                                                                >
                                                                    <span style={{ backgroundColor: "#ff3b66" }} />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/1_3.jpg"
                                                                    data-src-hover="assets/images/product-image/1_3.jpg"
                                                                    data-tooltip="Green"
                                                                >
                                                                    <span style={{ backgroundColor: "#ffc476" }} />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/1_4.jpg"
                                                                    data-src-hover="assets/images/product-image/1_4.jpg"
                                                                    data-tooltip="Sky Blue"
                                                                >
                                                                    <span style={{ backgroundColor: "#1af0ba" }} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ec-pro-size">
                                                        <span className="ec-pro-opt-label">Size</span>
                                                        <ul className="ec-opt-size">
                                                            <li className="active">
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-sz"
                                                                    data-old="$40.00"
                                                                    data-new="$30.00"
                                                                    data-tooltip="Small"
                                                                >
                                                                    S
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-sz"
                                                                    data-old="$50.00"
                                                                    data-new="$40.00"
                                                                    data-tooltip="Medium"
                                                                >
                                                                    M
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-left-sidebar.html" className="image">
                                                        <img
                                                            className="main-image"
                                                            src="assets/images/product-image/2_1.jpg"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/2_2.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <span className="ec-com-remove ec-remove-wish">
                                                        <a href="javascript:void(0)">×</a>
                                                    </span>
                                                    <span className="percentage">20%</span>
                                                    <a
                                                        href="#"
                                                        className="quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ec_quickview_modal"
                                                    >
                                                        <i className="fi-rr-eye" />
                                                    </a>
                                                    <div className="ec-pro-actions">
                                                        <a
                                                            href="compare.html"
                                                            className="ec-btn-group compare"
                                                            title="Compare"
                                                        >
                                                            <i className="fi fi-rr-arrows-repeat" />
                                                        </a>
                                                        <button title="Add To Cart" className="add-to-cart">
                                                            <i className="fi-rr-shopping-basket" /> Add To Cart
                                                        </button>
                                                        <a className="ec-btn-group wishlist" title="Wishlist">
                                                            <i className="fi-rr-heart" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <h5 className="ec-pro-title">
                                                    <a href="product-left-sidebar.html">Jumbo Carry Bag</a>
                                                </h5>
                                                <div className="ec-pro-rating">
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star" />
                                                </div>
                                                <div className="ec-pro-list-desc">
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum is simply dutmmy text
                                                    ever since the 1500s, when an unknown printer took a
                                                    galley.
                                                </div>
                                                <span className="ec-price">
                                                    <span className="old-price">$50.00</span>
                                                    <span className="new-price">$40.00</span>
                                                </span>
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-color">
                                                        <span className="ec-pro-opt-label">Color</span>
                                                        <ul className="ec-opt-swatch ec-change-img">
                                                            <li className="active">
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/2_1.jpg"
                                                                    data-src-hover="assets/images/product-image/2_2.jpg"
                                                                    data-tooltip="Gray"
                                                                >
                                                                    <span style={{ backgroundColor: "#fdbf04" }} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                        <div className="ec-product-inner">
                                            <div className="ec-pro-image-outer">
                                                <div className="ec-pro-image">
                                                    <a href="product-left-sidebar.html" className="image">
                                                        <img
                                                            className="main-image"
                                                            src="assets/images/product-image/8_1.jpg"
                                                            alt="Product"
                                                        />
                                                        <img
                                                            className="hover-image"
                                                            src="assets/images/product-image/8_2.jpg"
                                                            alt="Product"
                                                        />
                                                    </a>
                                                    <span className="ec-com-remove ec-remove-wish">
                                                        <a href="javascript:void(0)">×</a>
                                                    </span>
                                                    <span className="percentage">20%</span>
                                                    <a
                                                        href="#"
                                                        className="quickview"
                                                        data-link-action="quickview"
                                                        title="Quick view"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#ec_quickview_modal"
                                                    >
                                                        <i className="fi-rr-eye" />
                                                    </a>
                                                    <div className="ec-pro-actions">
                                                        <a
                                                            href="compare.html"
                                                            className="ec-btn-group compare"
                                                            title="Compare"
                                                        >
                                                            <i className="fi fi-rr-arrows-repeat" />
                                                        </a>
                                                        <button title="Add To Cart" className="add-to-cart">
                                                            <i className="fi-rr-shopping-basket" /> Add To Cart
                                                        </button>
                                                        <a className="ec-btn-group wishlist" title="Wishlist">
                                                            <i className="fi-rr-heart" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ec-pro-content">
                                                <h5 className="ec-pro-title">
                                                    <a href="product-left-sidebar.html">I smart watch 6gb</a>
                                                </h5>
                                                <div className="ec-pro-rating">
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star fill" />
                                                    <i className="ecicon eci-star" />
                                                </div>
                                                <div className="ec-pro-list-desc">
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum is simply dutmmy text
                                                    ever since the 1500s, when an unknown printer took a
                                                    galley.
                                                </div>
                                                <span className="ec-price">
                                                    <span className="old-price">$12.00</span>
                                                    <span className="new-price">$10.00</span>
                                                </span>
                                                <div className="ec-pro-option">
                                                    <div className="ec-pro-color">
                                                        <span className="ec-pro-opt-label">Color</span>
                                                        <ul className="ec-opt-swatch ec-change-img">
                                                            <li className="active">
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/8_1.jpg"
                                                                    data-src-hover="assets/images/product-image/8_1.jpg"
                                                                    data-tooltip="Gray"
                                                                >
                                                                    <span style={{ backgroundColor: "#e2e2e2" }} />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-clr-img"
                                                                    data-src="assets/images/product-image/8_3.jpg"
                                                                    data-src-hover="assets/images/product-image/8_3.jpg"
                                                                    data-tooltip="Orange"
                                                                >
                                                                    <span style={{ backgroundColor: "#ffcef7" }} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="ec-pro-size">
                                                        <span className="ec-pro-opt-label">Size</span>
                                                        <ul className="ec-opt-size">
                                                            <li className="active">
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-sz"
                                                                    data-old="$12.00"
                                                                    data-new="$10.00"
                                                                    data-tooltip="Small"
                                                                >
                                                                    S
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-sz"
                                                                    data-old="$15.00"
                                                                    data-new="$12.00"
                                                                    data-tooltip="Medium"
                                                                >
                                                                    M
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="ec-opt-sz"
                                                                    data-old="$20.00"
                                                                    data-new="$17.00"
                                                                    data-tooltip="Extra Large"
                                                                >
                                                                    XL
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*compare content End */}
                    </div>
                    {/* Compare Content end */}
                </div>
            </div>
        </section >



            <Footer />
        </>

    )
}

export default WishList
