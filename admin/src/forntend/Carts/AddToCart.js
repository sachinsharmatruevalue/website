import React from 'react'
import HomeHeader from '../HomeHeader'
import Footer from '../Footer'
import HomeBanner from '../banner/HomeBanner'


const AddToCart = () => {
    return (
        <>
        <HomeHeader/>
            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="ec-cart-leftside col-lg-8 col-md-12 ">
                            {/* cart content Start */}
                            <div className="ec-cart-content">
                                <div className="ec-cart-inner">
                                    <div className="row">
                                        <form action="#">
                                            <div className="table-content cart-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th style={{ textAlign: "center" }}>Quantity</th>
                                                            <th>Total</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td data-label="Product" className="ec-cart-pro-name">
                                                                <a href="product-left-sidebar.html">
                                                                    <img
                                                                        className="ec-cart-pro-img mr-4"
                                                                        src="assets/images/product-image/1.jpg"
                                                                        alt=""
                                                                    />
                                                                    Stylish Baby Shoes
                                                                </a>
                                                            </td>
                                                            <td data-label="Price" className="ec-cart-pro-price">
                                                                <span className="amount">$56.00</span>
                                                            </td>
                                                            <td
                                                                data-label="Quantity"
                                                                className="ec-cart-pro-qty"
                                                                style={{ textAlign: "center" }}
                                                            >
                                                                <div className="cart-qty-plus-minus">
                                                                    <input
                                                                        className="cart-plus-minus"
                                                                        type="text"
                                                                        name="cartqtybutton"
                                                                        defaultValue={1}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td
                                                                data-label="Total"
                                                                className="ec-cart-pro-subtotal"
                                                            >
                                                                $56.00
                                                            </td>
                                                            <td
                                                                data-label="Remove"
                                                                className="ec-cart-pro-remove"
                                                            >
                                                                <a href="#">
                                                                    <i className="ecicon eci-trash-o" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td data-label="Product" className="ec-cart-pro-name">
                                                                <a href="product-left-sidebar.html">
                                                                    <img
                                                                        className="ec-cart-pro-img mr-4"
                                                                        src="assets/images/product-image/2.jpg"
                                                                        alt=""
                                                                    />
                                                                    Unisex Fully Solid Hoodie
                                                                </a>
                                                            </td>
                                                            <td data-label="Price" className="ec-cart-pro-price">
                                                                <span className="amount">$75.00</span>
                                                            </td>
                                                            <td
                                                                data-label="Quantity"
                                                                className="ec-cart-pro-qty"
                                                                style={{ textAlign: "center" }}
                                                            >
                                                                <div className="cart-qty-plus-minus">
                                                                    <input
                                                                        className="cart-plus-minus"
                                                                        type="text"
                                                                        name="cartqtybutton"
                                                                        defaultValue={1}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td
                                                                data-label="Total"
                                                                className="ec-cart-pro-subtotal"
                                                            >
                                                                $75.00
                                                            </td>
                                                            <td
                                                                data-label="Remove"
                                                                className="ec-cart-pro-remove"
                                                            >
                                                                <a href="#">
                                                                    <i className="ecicon eci-trash-o" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td data-label="Product" className="ec-cart-pro-name">
                                                                <a href="product-left-sidebar.html">
                                                                    <img
                                                                        className="ec-cart-pro-img mr-4"
                                                                        src="assets/images/product-image/3.jpg"
                                                                        alt=""
                                                                    />
                                                                    Beautiful T-shirt For Women
                                                                </a>
                                                            </td>
                                                            <td data-label="Price" className="ec-cart-pro-price">
                                                                <span className="amount">$48.00</span>
                                                            </td>
                                                            <td
                                                                data-label="Quantity"
                                                                className="ec-cart-pro-qty"
                                                                style={{ textAlign: "center" }}
                                                            >
                                                                <div className="cart-qty-plus-minus">
                                                                    <input
                                                                        className="cart-plus-minus"
                                                                        type="text"
                                                                        name="cartqtybutton"
                                                                        defaultValue={1}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td
                                                                data-label="Total"
                                                                className="ec-cart-pro-subtotal"
                                                            >
                                                                $48.00
                                                            </td>
                                                            <td
                                                                data-label="Remove"
                                                                className="ec-cart-pro-remove"
                                                            >
                                                                <a href="#">
                                                                    <i className="ecicon eci-trash-o" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td data-label="Product" className="ec-cart-pro-name">
                                                                <a href="product-left-sidebar.html">
                                                                    <img
                                                                        className="ec-cart-pro-img mr-4"
                                                                        src="assets/images/product-image/4.jpg"
                                                                        alt=""
                                                                    />
                                                                    Wool Hat For Men
                                                                </a>
                                                            </td>
                                                            <td data-label="Price" className="ec-cart-pro-price">
                                                                <span className="amount">$95.00</span>
                                                            </td>
                                                            <td
                                                                data-label="Quantity"
                                                                className="ec-cart-pro-qty"
                                                                style={{ textAlign: "center" }}
                                                            >
                                                                <div className="cart-qty-plus-minus">
                                                                    <input
                                                                        className="cart-plus-minus"
                                                                        type="text"
                                                                        name="cartqtybutton"
                                                                        defaultValue={1}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td
                                                                data-label="Total"
                                                                className="ec-cart-pro-subtotal"
                                                            >
                                                                $95.00
                                                            </td>
                                                            <td
                                                                data-label="Remove"
                                                                className="ec-cart-pro-remove"
                                                            >
                                                                <a href="#">
                                                                    <i className="ecicon eci-trash-o" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="ec-cart-update-bottom">
                                                        <a href="#">Continue Shopping</a>
                                                        <button className="btn btn-primary">Check Out</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*cart content End */}
                        </div>
                        {/* Sidebar Area Start */}
                        <div className="ec-cart-rightside col-lg-4 col-md-12">
                            <div className="ec-sidebar-wrap">
                                {/* Sidebar Summary Block */}
                                <div className="ec-sidebar-block">
                                    <div className="ec-sb-title">
                                        <h3 className="ec-sidebar-title">Summary</h3>
                                    </div>
                                    <div className="ec-sb-block-content">
                                        <h4 className="ec-ship-title">Estimate Shipping</h4>
                                        <div className="ec-cart-form">
                                            <p>Enter your destination to get a shipping estimate</p>
                                            <form action="#" method="post">
                                                <span className="ec-cart-wrap">
                                                    <label>Country *</label>
                                                    <span className="ec-cart-select-inner">
                                                        <select
                                                            name="ec_cart_country"
                                                            id="ec-cart-select-country"
                                                            className="ec-cart-select"
                                                        >
                                                            <option selected="" disabled="">
                                                                United States
                                                            </option>
                                                            <option value={1}>Country 1</option>
                                                            <option value={2}>Country 2</option>
                                                            <option value={3}>Country 3</option>
                                                            <option value={4}>Country 4</option>
                                                            <option value={5}>Country 5</option>
                                                        </select>
                                                    </span>
                                                </span>
                                                <span className="ec-cart-wrap">
                                                    <label>State/Province</label>
                                                    <span className="ec-cart-select-inner">
                                                        <select
                                                            name="ec_cart_state"
                                                            id="ec-cart-select-state"
                                                            className="ec-cart-select"
                                                        >
                                                            <option selected="" disabled="">
                                                                Please Select a region, state
                                                            </option>
                                                            <option value={1}>Region/State 1</option>
                                                            <option value={2}>Region/State 2</option>
                                                            <option value={3}>Region/State 3</option>
                                                            <option value={4}>Region/State 4</option>
                                                            <option value={5}>Region/State 5</option>
                                                        </select>
                                                    </span>
                                                </span>
                                                <span className="ec-cart-wrap">
                                                    <label>Zip/Postal Code</label>
                                                    <input
                                                        type="text"
                                                        name="postalcode"
                                                        placeholder="Zip/Postal Code"
                                                    />
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="ec-sb-block-content">
                                        <div className="ec-cart-summary-bottom">
                                            <div className="ec-cart-summary">
                                                <div>
                                                    <span className="text-left">Sub-Total</span>
                                                    <span className="text-right">$80.00</span>
                                                </div>
                                                <div>
                                                    <span className="text-left">Delivery Charges</span>
                                                    <span className="text-right">$80.00</span>
                                                </div>
                                                <div>
                                                    <span className="text-left">Coupan Discount</span>
                                                    <span className="text-right">
                                                        <a className="ec-cart-coupan">Apply Coupan</a>
                                                    </span>
                                                </div>
                                                <div className="ec-cart-coupan-content">
                                                    <form
                                                        className="ec-cart-coupan-form"
                                                        name="ec-cart-coupan-form"
                                                        method="post"
                                                        action="#"
                                                    >
                                                        <input
                                                            className="ec-coupan"
                                                            type="text"
                                                            required=""
                                                            placeholder="Enter Your Coupan Code"
                                                            name="ec-coupan"
                                                            defaultValue=""
                                                        />
                                                        <button
                                                            className="ec-coupan-btn button btn-primary"
                                                            type="submit"
                                                            name="subscribe"
                                                            value=""
                                                        >
                                                            Apply
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="ec-cart-summary-total">
                                                    <span className="text-left">Total Amount</span>
                                                    <span className="text-right">$80.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Sidebar Summary Block */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Product Start */}
            <section className="section ec-new-product section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="ec-bg-title">New Arrivals</h2>
                                <h2 className="ec-title">New Arrivals</h2>
                                <p className="sub-title">Browse The Collection of Top Products</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* New Product Content */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum is simply dutmmy text ever since the
                                        1500s, when an unknown printer took a galley.
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
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum is simply dutmmy text ever since the
                                        1500s, when an unknown printer took a galley.
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
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum is simply dutmmy text ever since the
                                        1500s, when an unknown printer took a galley.
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
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum is simply dutmmy text ever since the
                                        1500s, when an unknown printer took a galley.
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
                        <div className="col-sm-12 shop-all-btn">
                            <a href="#">Shop All Collection</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default AddToCart