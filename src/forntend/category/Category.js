import React from 'react'
import HomeHeader from '../HomeHeader'
import Footer from '../Footer'

const Category = () => {
    return (
        <>
            <HomeHeader />

            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="ec-shop-rightside col-lg-9 order-lg-last col-md-12 order-md-first margin-b-30">
                            {/* Shop Top Start */}
                            <div className="ec-pro-list-top d-flex">
                                <div className="col-md-6 ec-grid-list">
                                    <div className="ec-gl-btn">
                                        <button className="btn btn-grid active">
                                            <i className="fi-rr-apps" />
                                        </button>
                                        <button className="btn btn-list">
                                            <i className="fi-rr-list" />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6 ec-sort-select">
                                    <span className="sort-by">Sort by</span>
                                    <div className="ec-select-inner">
                                        <select name="ec-select" id="ec-select">
                                            <option selected="" disabled="">
                                                Position
                                            </option>
                                            <option value={1}>Relevance</option>
                                            <option value={2}>Name, A to Z</option>
                                            <option value={3}>Name, Z to A</option>
                                            <option value={4}>Price, low to high</option>
                                            <option value={5}>Price, high to low</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* Shop Top End */}
                            {/* Shop content Start */}
                            <div className="shop-pro-content">
                                <div className="shop-pro-inner">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                            <div className="ec-product-inner">
                                                <div className="ec-pro-image-outer">
                                                    <div className="ec-pro-image">
                                                        <a href="product-left-sidebar.html" className="image">
                                                            <img
                                                                className="main-image"
                                                                src="assets/images/product-image/6_1.jpg"
                                                                alt="Product"
                                                            />
                                                            <img
                                                                className="hover-image"
                                                                src="assets/images/product-image/6_2.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
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
                                                        <a href="product-left-sidebar.html">Round Neck T-Shirt</a>
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
                                                        <span className="old-price">$27.00</span>
                                                        <span className="new-price">$22.00</span>
                                                    </span>
                                                    <div className="ec-pro-option">
                                                        <div className="ec-pro-color">
                                                            <span className="ec-pro-opt-label">Color</span>
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active">
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/6_1.jpg"
                                                                        data-src-hover="assets/images/product-image/6_1.jpg"
                                                                        data-tooltip="Gray"
                                                                    >
                                                                        <span style={{ backgroundColor: "#e8c2ff" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/6_2.jpg"
                                                                        data-src-hover="assets/images/product-image/6_2.jpg"
                                                                        data-tooltip="Orange"
                                                                    >
                                                                        <span style={{ backgroundColor: "#9cfdd5" }} />
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
                                                                        data-old="$25.00"
                                                                        data-new="$20.00"
                                                                        data-tooltip="Small"
                                                                    >
                                                                        S
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-sz"
                                                                        data-old="$27.00"
                                                                        data-new="$22.00"
                                                                        data-tooltip="Medium"
                                                                    >
                                                                        M
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-sz"
                                                                        data-old="$30.00"
                                                                        data-new="$25.00"
                                                                        data-tooltip="Large"
                                                                    >
                                                                        X
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-sz"
                                                                        data-old="$35.00"
                                                                        data-new="$30.00"
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
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                            <div className="ec-product-inner">
                                                <div className="ec-pro-image-outer">
                                                    <div className="ec-pro-image">
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
                                                        <span className="percentage">20%</span>
                                                        <span className="flags">
                                                            <span className="sale">Sale</span>
                                                        </span>
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
                                                                        data-old="$18.00"
                                                                        data-new="$15.00"
                                                                        data-tooltip="Large"
                                                                    >
                                                                        X
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
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
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
                                                        <span className="percentage">20%</span>
                                                        <span className="flags">
                                                            <span className="sale">Sale</span>
                                                        </span>
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
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
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
                                                        <span className="percentage">20%</span>
                                                        <span className="flags">
                                                            <span className="new">New</span>
                                                        </span>
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
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                            <div className="ec-product-inner">
                                                <div className="ec-pro-image-outer">
                                                    <div className="ec-pro-image">
                                                        <a href="product-left-sidebar.html" className="image">
                                                            <img
                                                                className="main-image"
                                                                src="assets/images/product-image/3_1.jpg"
                                                                alt="Product"
                                                            />
                                                            <img
                                                                className="hover-image"
                                                                src="assets/images/product-image/3_2.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                        <span className="percentage">20%</span>
                                                        <span className="flags">
                                                            <span className="new">New</span>
                                                        </span>
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
                                                        <a href="product-left-sidebar.html">
                                                            Designer Leather Purses
                                                        </a>
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
                                                                        data-src="assets/images/product-image/3_1.jpg"
                                                                        data-src-hover="assets/images/product-image/3_1.jpg"
                                                                        data-tooltip="Gray"
                                                                    >
                                                                        <span style={{ backgroundColor: "#75e3ff" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/3_2.jpg"
                                                                        data-src-hover="assets/images/product-image/3_2.jpg"
                                                                        data-tooltip="Orange"
                                                                    >
                                                                        <span style={{ backgroundColor: "#11f7d8" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/3_3.jpg"
                                                                        data-src-hover="assets/images/product-image/3_3.jpg"
                                                                        data-tooltip="Green"
                                                                    >
                                                                        <span style={{ backgroundColor: "#acff7c" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/3_5.jpg"
                                                                        data-src-hover="assets/images/product-image/3_5.jpg"
                                                                        data-tooltip="Sky Blue"
                                                                    >
                                                                        <span style={{ backgroundColor: "#e996fa" }} />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                            <div className="ec-product-inner">
                                                <div className="ec-pro-image-outer">
                                                    <div className="ec-pro-image">
                                                        <a href="product-left-sidebar.html" className="image">
                                                            <img
                                                                className="main-image"
                                                                src="assets/images/product-image/4_1.jpg"
                                                                alt="Product"
                                                            />
                                                            <img
                                                                className="hover-image"
                                                                src="assets/images/product-image/4_2.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
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
                                                        <a href="product-left-sidebar.html">Canvas Cowboy Hat</a>
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
                                                                        data-src="assets/images/product-image/4_1.jpg"
                                                                        data-src-hover="assets/images/product-image/4_1.jpg"
                                                                        data-tooltip="Gray"
                                                                    >
                                                                        <span style={{ backgroundColor: "#ebbf60" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/4_2.jpg"
                                                                        data-src-hover="assets/images/product-image/4_2.jpg"
                                                                        data-tooltip="Orange"
                                                                    >
                                                                        <span style={{ backgroundColor: "#b4fc57" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/4_3.jpg"
                                                                        data-src-hover="assets/images/product-image/4_3.jpg"
                                                                        data-tooltip="Green"
                                                                    >
                                                                        <span style={{ backgroundColor: "#2ea1cd" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/4_4.jpg"
                                                                        data-src-hover="assets/images/product-image/4_4.jpg"
                                                                        data-tooltip="Sky Blue"
                                                                    >
                                                                        <span style={{ backgroundColor: "#c1a1fd" }} />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                            <div className="ec-product-inner">
                                                <div className="ec-pro-image-outer">
                                                    <div className="ec-pro-image">
                                                        <a href="product-left-sidebar.html" className="image">
                                                            <img
                                                                className="main-image"
                                                                src="assets/images/product-image/5_1.jpg"
                                                                alt="Product"
                                                            />
                                                            <img
                                                                className="hover-image"
                                                                src="assets/images/product-image/5_2.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                        <span className="flags">
                                                            <span className="new">New</span>
                                                        </span>
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
                                                        <a href="product-left-sidebar.html">
                                                            Leather Belt for Men
                                                        </a>
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
                                                        <span className="old-price">$15.00</span>
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
                                                                        data-src="assets/images/product-image/5_1.jpg"
                                                                        data-src-hover="assets/images/product-image/5_1.jpg"
                                                                        data-tooltip="Gray"
                                                                    >
                                                                        <span style={{ backgroundColor: "#9e9e9e" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/5_2.jpg"
                                                                        data-src-hover="assets/images/product-image/5_2.jpg"
                                                                        data-tooltip="Orange"
                                                                    >
                                                                        <span style={{ backgroundColor: "#eb8e76" }} />
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
                                                                        data-old="$15.00"
                                                                        data-new="$10.00"
                                                                        data-tooltip="Small"
                                                                    >
                                                                        32
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-sz"
                                                                        data-old="$17.00"
                                                                        data-new="$12.00"
                                                                        data-tooltip="Medium"
                                                                    >
                                                                        34
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-sz"
                                                                        data-old="$20.00"
                                                                        data-new="$15.00"
                                                                        data-tooltip="Large"
                                                                    >
                                                                        36
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
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
                                                        <span className="percentage">20%</span>
                                                        <span className="flags">
                                                            <span className="new">New</span>
                                                        </span>
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
                                                        <a href="product-left-sidebar.html">
                                                            Digital Smart Watches
                                                        </a>
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
                                                        <span className="old-price">$100.00</span>
                                                        <span className="new-price">$80.00</span>
                                                    </span>
                                                    <div className="ec-pro-option">
                                                        <div className="ec-pro-color">
                                                            <span className="ec-pro-opt-label">Color</span>
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active">
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/8_2.jpg"
                                                                        data-src-hover="assets/images/product-image/8_2.jpg"
                                                                        data-tooltip="Gray"
                                                                    >
                                                                        <span style={{ backgroundColor: "#e9dddd" }} />
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
                                                                        <span style={{ backgroundColor: "#ffd5cb" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/8_4.jpg"
                                                                        data-src-hover="assets/images/product-image/8_4.jpg"
                                                                        data-tooltip="Green"
                                                                    >
                                                                        <span style={{ backgroundColor: "#92e4fd" }} />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                            <div className="ec-product-inner">
                                                <div className="ec-pro-image-outer">
                                                    <div className="ec-pro-image">
                                                        <a href="product-left-sidebar.html" className="image">
                                                            <img
                                                                className="main-image"
                                                                src="assets/images/product-image/6_1.jpg"
                                                                alt="Product"
                                                            />
                                                            <img
                                                                className="hover-image"
                                                                src="assets/images/product-image/6_2.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
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
                                                        <a href="product-left-sidebar.html">Round Neck T-Shirt</a>
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
                                                        <span className="old-price">$27.00</span>
                                                        <span className="new-price">$22.00</span>
                                                    </span>
                                                    <div className="ec-pro-option">
                                                        <div className="ec-pro-color">
                                                            <span className="ec-pro-opt-label">Color</span>
                                                            <ul className="ec-opt-swatch ec-change-img">
                                                                <li className="active">
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/6_1.jpg"
                                                                        data-src-hover="assets/images/product-image/6_1.jpg"
                                                                        data-tooltip="Gray"
                                                                    >
                                                                        <span style={{ backgroundColor: "#e8c2ff" }} />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-clr-img"
                                                                        data-src="assets/images/product-image/6_2.jpg"
                                                                        data-src-hover="assets/images/product-image/6_2.jpg"
                                                                        data-tooltip="Orange"
                                                                    >
                                                                        <span style={{ backgroundColor: "#9cfdd5" }} />
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
                                                                        data-old="$25.00"
                                                                        data-new="$20.00"
                                                                        data-tooltip="Small"
                                                                    >
                                                                        S
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-sz"
                                                                        data-old="$27.00"
                                                                        data-new="$22.00"
                                                                        data-tooltip="Medium"
                                                                    >
                                                                        M
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-sz"
                                                                        data-old="$30.00"
                                                                        data-new="$25.00"
                                                                        data-tooltip="Large"
                                                                    >
                                                                        X
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="#"
                                                                        className="ec-opt-sz"
                                                                        data-old="$35.00"
                                                                        data-new="$30.00"
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
                                {/* Ec Pagination Start */}
                                <div className="ec-pro-pagination">
                                    <span>Showing 1-12 of 21 item(s)</span>
                                    <ul className="ec-pro-pagination-inner">
                                        <li>
                                            <a className="active" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">2</a>
                                        </li>
                                        <li>
                                            <a href="#">3</a>
                                        </li>
                                        <li>
                                            <a href="#">4</a>
                                        </li>
                                        <li>
                                            <a href="#">5</a>
                                        </li>
                                        <li>
                                            <a className="next" href="#">
                                                Next <i className="ecicon eci-angle-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Ec Pagination End */}
                            </div>
                            {/*Shop content End */}
                        </div>
                        {/* Sidebar Area Start */}
                        <div className="ec-shop-leftside col-lg-3 order-lg-first col-md-12 order-md-last">
                            <div id="shop_sidebar">
                                <div className="ec-sidebar-heading">
                                    <h1>Filter Products By</h1>
                                </div>
                                <div className="ec-sidebar-wrap">
                                    {/* Sidebar Category Block */}
                                    <div className="ec-sidebar-block">
                                        <div className="ec-sb-title">
                                            <h3 className="ec-sidebar-title">Category</h3>
                                        </div>
                                        <div className="ec-sb-block-content">
                                            <ul>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" defaultChecked="" />{" "}
                                                        <a href="#">clothes</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" /> <a href="#">Bags</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" /> <a href="#">Shoes</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" /> <a href="#">cosmetics</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" /> <a href="#">electrics</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" /> <a href="#">phone</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li
                                                    id="ec-more-toggle-content"
                                                    style={{ padding: 0, display: "none" }}
                                                >
                                                    <ul>
                                                        <li>
                                                            <div className="ec-sidebar-block-item">
                                                                <input type="checkbox" /> <a href="#">Watch</a>
                                                                <span className="checked" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="ec-sidebar-block-item">
                                                                <input type="checkbox" /> <a href="#">Cap</a>
                                                                <span className="checked" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item ec-more-toggle">
                                                        <span className="checked" />
                                                        <span id="ec-more-toggle">More Categories</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Sidebar Size Block */}
                                    <div className="ec-sidebar-block">
                                        <div className="ec-sb-title">
                                            <h3 className="ec-sidebar-title">Size</h3>
                                        </div>
                                        <div className="ec-sb-block-content">
                                            <ul>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input
                                                            type="checkbox"
                                                            defaultValue=""
                                                            defaultChecked=""
                                                        />
                                                        <a href="#">S</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" defaultValue="" />
                                                        <a href="#">M</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" defaultValue="" />{" "}
                                                        <a href="#">L</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" defaultValue="" />
                                                        <a href="#">XL</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <input type="checkbox" defaultValue="" />
                                                        <a href="#">XXL</a>
                                                        <span className="checked" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Sidebar Color item */}
                                    <div className="ec-sidebar-block ec-sidebar-block-clr">
                                        <div className="ec-sb-title">
                                            <h3 className="ec-sidebar-title">Color</h3>
                                        </div>
                                        <div className="ec-sb-block-content">
                                            <ul>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#c4d6f9" }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#ff748b" }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#000000" }} />
                                                    </div>
                                                </li>
                                                <li className="active">
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#2bff4a" }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#ff7c5e" }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#f155ff" }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#ffef00" }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#c89fff" }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#7bfffa" }} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="ec-sidebar-block-item">
                                                        <span style={{ backgroundColor: "#56ffc1" }} />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Sidebar Price Block */}
                                    <div className="ec-sidebar-block">
                                        <div className="ec-sb-title">
                                            <h3 className="ec-sidebar-title">Price</h3>
                                        </div>
                                        <div className="ec-sb-block-content es-price-slider">
                                            <div className="ec-price-filter">
                                                <div
                                                    id="ec-sliderPrice"
                                                    className="filter__slider-price"
                                                    data-min={0}
                                                    data-max={250}
                                                    data-step={10}
                                                />
                                                <div className="ec-price-input">
                                                    <label className="filter__label">
                                                        <input type="text" className="filter__input" />
                                                    </label>
                                                    <span className="ec-price-divider" />
                                                    <label className="filter__label">
                                                        <input type="text" className="filter__input" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />

        </>

    )
}

export default Category
