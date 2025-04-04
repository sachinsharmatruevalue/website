import React from 'react'
import HomeHeader from '../HomeHeader'
import Footer from '../Footer'


const About = () => {
    return (
        <>
            <HomeHeader />
            <div className="sticky-header-next-sec  ec-breadcrumb section-space-mb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row ec_breadcrumb_inner">
                                <div className="col-md-6 col-sm-12">
                                    <h2 className="ec-breadcrumb-title">About Us</h2>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    {/* ec-breadcrumb-list start */}
                                    <ul className="ec-breadcrumb-list">
                                        <li className="ec-breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="ec-breadcrumb-item active">About Us</li>
                                    </ul>
                                    {/* ec-breadcrumb-list end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2 className="ec-bg-title">About Us</h2>
                                <h2 className="ec-title">About Us</h2>
                                <p className="sub-title mb-3">About our business Firm</p>
                            </div>
                        </div>
                        <div className="ec-common-wrapper">
                            <div className="row">
                                <div className="col-md-6 ec-cms-block ec-abcms-block text-center">
                                    <div className="ec-cms-block-inner">
                                        <img
                                            className="a-img"
                                            src="assets/images/offer-image/1.jpg"
                                            alt="about"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 ec-cms-block ec-abcms-block text-center">
                                    <div className="ec-cms-block-inner">
                                        <h3 className="ec-cms-block-title">What is the ekka?</h3>
                                        <p>
                                            Electronic typesetting text of the printing and typesetting
                                            industry. when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book. Lorem Ipsum is
                                            simply dutmmy text ever since the 1500s, It has survived not
                                            only, but also the leap into electronic typesetting.
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing. It has
                                            survived not only five centuries, but also the leap into
                                            electronic typesetting.
                                        </p>
                                        <p>
                                            Also the leap into electronic typesetting printing and
                                            typesetting industry. It has survived not only five centuries,
                                            but also the leap into electronic typesetting, when an unknown
                                            printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining
                                            essentially unchanged.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ec testmonial Start */}
            <section
                className="section ec-test-section section-space-ptb-100 section-space-m"
                id="reviews"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title mb-0">
                                <h2 className="ec-bg-title">Testimonial</h2>
                                <h2 className="ec-title">Client Review</h2>
                                <p className="sub-title mb-3">What say client about us</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ec-test-outer">
                            <ul id="ec-testimonial-slider">
                                <li className="ec-test-item">
                                    <i className="fi-rr-quote-right top" />
                                    <div className="ec-test-inner">
                                        <div className="ec-test-img">
                                            <img
                                                alt="testimonial"
                                                title="testimonial"
                                                src="assets/images/testimonial/1.jpg"
                                            />
                                        </div>
                                        <div className="ec-test-content">
                                            <div className="ec-test-desc">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen
                                            </div>
                                            <div className="ec-test-name">John Doe</div>
                                            <div className="ec-test-designation">General Manager</div>
                                            <div className="ec-test-rating">
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <i className="fi-rr-quote-right bottom" />
                                </li>
                                <li className="ec-test-item ">
                                    <i className="fi-rr-quote-right top" />
                                    <div className="ec-test-inner">
                                        <div className="ec-test-img">
                                            <img
                                                alt="testimonial"
                                                title="testimonial"
                                                src="assets/images/testimonial/2.jpg"
                                            />
                                        </div>
                                        <div className="ec-test-content">
                                            <div className="ec-test-desc">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen
                                            </div>
                                            <div className="ec-test-name">John Doe</div>
                                            <div className="ec-test-designation">General Manager</div>
                                            <div className="ec-test-rating">
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <i className="fi-rr-quote-right bottom" />
                                </li>
                                <li className="ec-test-item">
                                    <i className="fi-rr-quote-right top" />
                                    <div className="ec-test-inner">
                                        <div className="ec-test-img">
                                            <img
                                                alt="testimonial"
                                                title="testimonial"
                                                src="assets/images/testimonial/3.jpg"
                                            />
                                        </div>
                                        <div className="ec-test-content">
                                            <div className="ec-test-desc">
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen
                                            </div>
                                            <div className="ec-test-name">John Doe</div>
                                            <div className="ec-test-designation">General Manager</div>
                                            <div className="ec-test-rating">
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                                <i className="ecicon eci-star fill" />
                                            </div>
                                        </div>
                                    </div>
                                    <i className="fi-rr-quote-right bottom" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* ec testmonial end */}
            {/*  services Section Start */}
            
            <section
                className="section ec-services-section section-space-p"
                id="services"
            >
                <h2 className="d-none">Services</h2>
                <div className="container">
                    <div className="row">
                        <div
                            className="ec_ser_content ec_ser_content_1 col-sm-12 col-md-6 col-lg-3"
                            data-animation="zoomIn"
                        >
                            <div className="ec_ser_inner">
                                <div className="ec-service-image">
                                    <i className="fi fi-ts-truck-moving" />
                                </div>
                                <div className="ec-service-desc">
                                    <h2>Free Shipping</h2>
                                    <p>Free shipping on all US order or order above $200</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="ec_ser_content ec_ser_content_2 col-sm-12 col-md-6 col-lg-3"
                            data-animation="zoomIn"
                        >
                            <div className="ec_ser_inner">
                                <div className="ec-service-image">
                                    <i className="fi fi-ts-hand-holding-seeding" />
                                </div>
                                <div className="ec-service-desc">
                                    <h2>24X7 Support</h2>
                                    <p>Contact us 24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="ec_ser_content ec_ser_content_3 col-sm-12 col-md-6 col-lg-3"
                            data-animation="zoomIn"
                        >
                            <div className="ec_ser_inner">
                                <div className="ec-service-image">
                                    <i className="fi fi-ts-badge-percent" />
                                </div>
                                <div className="ec-service-desc">
                                    <h2>30 Days Return</h2>
                                    <p>Simply return it within 30 days for an exchange</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="ec_ser_content ec_ser_content_4 col-sm-12 col-md-6 col-lg-3"
                            data-animation="zoomIn"
                        >
                            <div className="ec_ser_inner">
                                <div className="ec-service-image">
                                    <i className="fi fi-ts-donate" />
                                </div>
                                <div className="ec-service-desc">
                                    <h2>Payment Secure</h2>
                                    <p>Contact us 24 hours a day, 7 days a week</p>
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

export default About