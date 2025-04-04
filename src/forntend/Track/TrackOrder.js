import React from 'react'
import HomeHeader from '../HomeHeader'
import Footer from '../Footer'


const TrackOrder = () => {
  return (
    <>
    <HomeHeader/>
      <div className="sticky-header-next-sec  ec-breadcrumb section-space-mb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row ec_breadcrumb_inner">
                <div className="col-md-6 col-sm-12">
                  <h2 className="ec-breadcrumb-title">Track Order</h2>
                </div>
                <div className="col-md-6 col-sm-12">
                  {/* ec-breadcrumb-list start */}
                  <ul className="ec-breadcrumb-list">
                    <li className="ec-breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="ec-breadcrumb-item active">Track</li>
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
          {/* Track Order Content Start */}
          <div className="ec-trackorder-content col-md-12">
            <div className="ec-trackorder-inner">
              <div className="ec-trackorder-top">
                <h2 className="ec-order-id">order #6152</h2>
                <div className="ec-order-detail">
                  <div>Expected arrival 14-02-2021-2022</div>
                  <div>
                    Grasshoppers <span>v534hb</span>
                  </div>
                </div>
              </div>
              <div className="ec-trackorder-bottom">
                <div className="ec-progress-track">
                  <ul id="ec-progressbar">
                    <li className="step0 active">
                      <span className="ec-track-icon">
                        {" "}
                        <img
                          src="assets/images/icons/track_1.png"
                          alt="track_order"
                        />
                      </span>
                      <span className="ec-progressbar-track" />
                      <span className="ec-track-title">
                        order
                        <br />
                        processed
                      </span>
                    </li>
                    <li className="step0 active">
                      <span className="ec-track-icon">
                        {" "}
                        <img
                          src="assets/images/icons/track_2.png"
                          alt="track_order"
                        />
                      </span>
                      <span className="ec-progressbar-track" />
                      <span className="ec-track-title">
                        order
                        <br />
                        designing
                      </span>
                    </li>
                    <li className="step0 active">
                      <span className="ec-track-icon">
                        {" "}
                        <img
                          src="assets/images/icons/track_3.png"
                          alt="track_order"
                        />
                      </span>
                      <span className="ec-progressbar-track" />
                      <span className="ec-track-title">
                        order
                        <br />
                        shipped
                      </span>
                    </li>
                    <li className="step0">
                      <span className="ec-track-icon">
                        {" "}
                        <img
                          src="assets/images/icons/track_4.png"
                          alt="track_order"
                        />
                      </span>
                      <span className="ec-progressbar-track" />
                      <span className="ec-track-title">
                        order <br />
                        enroute
                      </span>
                    </li>
                    <li className="step0">
                      <span className="ec-track-icon">
                        {" "}
                        <img
                          src="assets/images/icons/track_5.png"
                          alt="track_order"
                        />
                      </span>
                      <span className="ec-progressbar-track" />
                      <span className="ec-track-title">
                        order
                        <br />
                        arrived
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Track Order Content end */}
        </div>
      </section>
      <Footer/>
    </>


  )
}

export default TrackOrder