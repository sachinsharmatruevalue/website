import React from 'react'
import "./Footer.css"

export default function Footer() {
	return (
<>
<footer className="ec-footer">
  <div className="footer-container">
    <div className="footer-top section-space-footer-p">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3 ec-footer-account">
            <div className="ec-footer-widget">
              <h4 className="ec-footer-heading">Account</h4>
              <div className="ec-footer-links">
                <ul className="align-items-center">
                  <li className="ec-footer-link">
                    <a href="user-profile.html">My Account</a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="track-order.html">Order History</a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="wishlist.html">Wish List</a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="offer.html">Specials</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 ec-footer-service">
            <div className="ec-footer-widget">
              <h4 className="ec-footer-heading">Services</h4>
              <div className="ec-footer-links">
                <ul className="align-items-center">
                  <li className="ec-footer-link">
                    <a href="#">Discount Returns</a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="privacy-policy.html">Policy &amp; policy </a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="#">Customer Service</a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="terms-condition.html">Term &amp; condition</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 ec-footer-info">
            <div className="ec-footer-widget">
              <h4 className="ec-footer-heading">Information</h4>
              <div className="ec-footer-links">
                <ul className="align-items-center">
                  <li className="ec-footer-link">
                    <a href="about-us.html">About us</a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="track-order.html">Delivery Information</a>
                  </li>
                  <li className="ec-footer-link">
                    <a href="contact-us.html">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-3 ec-footer-contact">
            <div className="ec-footer-widget">
              <h4 className="ec-footer-heading">Location</h4>
              <div className="ec-footer-links">
                <ul className="align-items-center">
                  <li className="ec-footer-link">
                    <i className="ecicon eci-map-marker" aria-hidden="true" />
                    71 Pilgrim Avenue Chevy Chase, MD 20815, USA
                  </li>
                  <li className="ec-footer-link">
                    <i className="ecicon eci-phone" aria-hidden="true" />
                    +91 8559959994
                  </li>
                  <li className="ec-footer-link">
                    <i className="ecicon eci-envelope" aria-hidden="true" />
                    surendra.purviya@gmail.com
                  </li>
                </ul>
                <div className="col-sm-12 ec-footer-social">
                  <div className="ec-footer-widget">
                    <div className="ec-footer-links">
                      <ul className="align-items-center">
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="ecicon eci-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="ecicon eci-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="ecicon eci-instagram" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">
                            <i className="ecicon eci-linkedin" />
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
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          {/* Footer Copyright Start */}
          <div className="col footer-copy">
            <div className="footer-bottom-copy ">
              <div className="ec-copy">
                Copyright © <span id="copyright_year" />{" "}
                <a className="site-name text-upper" href="index.html">
                  Websuntech
                </a>
                . All Rights Reserved
              </div>
            </div>
          </div>
          {/* Footer Copyright End */}
          {/* Footer payment */}
          <div className="col footer-bottom-right">
            <div className="footer-bottom-payment d-flex justify-content-end">
              <div className="payment-link">
                <img src="assets/images/icons/payment.png" alt="" />
              </div>
            </div>
          </div>
          {/* Footer payment */}
        </div>
      </div>
    </div>
  </div>
</footer>



</>


	)
}

