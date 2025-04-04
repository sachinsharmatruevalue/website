import React from 'react'
import HomeHeader from '../HomeHeader'
import Footer from '../Footer'

export default function Blogs() {
   return (
      <div>
         <HomeHeader />

         <>
            <div className="sticky-header-next-sec  ec-breadcrumb section-space-mb">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="row ec_breadcrumb_inner">
                           <div className="col-md-6 col-sm-12">
                              <h2 className="ec-breadcrumb-title">Blog Page</h2>
                           </div>
                           <div className="col-md-6 col-sm-12">
                              {/* ec-breadcrumb-list start */}
                              <ul className="ec-breadcrumb-list">
                                 <li className="ec-breadcrumb-item">
                                    <a href="index.html">Home</a>
                                 </li>
                                 <li className="ec-breadcrumb-item active">Blog Page</li>
                              </ul>
                              {/* ec-breadcrumb-list end */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Ec breadcrumb end */}
            {/* Ec Blog page */}
            <section className="ec-page-content section-space-p">
               <div className="container">
                  <div className="row">
                     <div className="ec-blogs-rightside col-lg-12 col-md-12">
                        {/* Blog content Start */}
                        <div className="ec-blogs-content">
                           <div className="ec-blogs-inner">
                              <div className="row">
                                 <div className="col-lg-4 col-md-6 col-sm-12 mb-6 ec-blog-block">
                                    <div className="ec-blog-inner">
                                       <div className="ec-blog-image">
                                          <a href="blog-detail-left-sidebar.html">
                                             <img
                                                className="blog-image"
                                                src="assets/images/blog-image/1.jpg"
                                                alt="Blog"
                                             />
                                          </a>
                                       </div>
                                       <div className="ec-blog-content">
                                          <h5 className="ec-blog-title">
                                             <a href="blog-detail-left-sidebar.html">
                                                The best fashion influencers.
                                             </a>
                                          </h5>
                                          <div className="ec-blog-date">
                                             By <span>Mr Admin</span> / February 10, 2021-2022
                                          </div>
                                          <div className="ec-blog-desc">
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                             industry's standard dummy text ever since the 1500s,
                                          </div>
                                          <div className="ec-blog-btn">
                                             <a href="#" className="btn btn-primary">
                                                Read More
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 mb-6 ec-blog-block">
                                    <div className="ec-blog-inner">
                                       <div className="ec-blog-image">
                                          <a href="blog-detail-left-sidebar.html">
                                             <img
                                                className="blog-image"
                                                src="assets/images/blog-image/2.jpg"
                                                alt="Blog"
                                             />
                                          </a>
                                       </div>
                                       <div className="ec-blog-content">
                                          <h5 className="ec-blog-title">
                                             <a href="blog-detail-left-sidebar.html">
                                                Summer Trending Fashion Market.
                                             </a>
                                          </h5>
                                          <div className="ec-blog-date">
                                             By <span>Mr Admin</span> / February 10, 2021-2022
                                          </div>
                                          <div className="ec-blog-desc">
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                             industry's standard dummy text ever since the 1500s,
                                          </div>
                                          <div className="ec-blog-btn">
                                             <a href="#" className="btn btn-primary">
                                                Read More
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 mb-6 ec-blog-block">
                                    <div className="ec-blog-inner">
                                       <div className="ec-blog-image">
                                          <a href="blog-detail-left-sidebar.html">
                                             <img
                                                className="blog-image"
                                                src="assets/images/blog-image/3.jpg"
                                                alt="Blog"
                                             />
                                          </a>
                                       </div>
                                       <div className="ec-blog-content">
                                          <h5 className="ec-blog-title">
                                             <a href="blog-detail-left-sidebar.html">
                                                Fashion Market Reveals Her Jacket.
                                             </a>
                                          </h5>
                                          <div className="ec-blog-date">
                                             By <span>Mr Admin</span> / February 10, 2021-2022
                                          </div>
                                          <div className="ec-blog-desc">
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                             industry's standard dummy text ever since the 1500s,
                                          </div>
                                          <div className="ec-blog-btn">
                                             <a href="#" className="btn btn-primary">
                                                Read More
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 mb-6 ec-blog-block">
                                    <div className="ec-blog-inner">
                                       <div className="ec-blog-image">
                                          <a href="blog-detail-left-sidebar.html">
                                             <img
                                                className="blog-image"
                                                src="assets/images/blog-image/4.jpg"
                                                alt="Blog"
                                             />
                                          </a>
                                       </div>
                                       <div className="ec-blog-content">
                                          <h5 className="ec-blog-title">
                                             <a href="blog-detail-left-sidebar.html">
                                                Winter 2021 Trending Fashion Market.
                                             </a>
                                          </h5>
                                          <div className="ec-blog-date">
                                             By <span>Mr Admin</span> / February 10, 2021-2022
                                          </div>
                                          <div className="ec-blog-desc">
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                             industry's standard dummy text ever since the 1500s,
                                          </div>
                                          <div className="ec-blog-btn">
                                             <a href="#" className="btn btn-primary">
                                                Read More
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 mb-6 ec-blog-block">
                                    <div className="ec-blog-inner">
                                       <div className="ec-blog-image">
                                          <a href="blog-detail-left-sidebar.html">
                                             <img
                                                className="blog-image"
                                                src="assets/images/blog-image/5.jpg"
                                                alt="Blog"
                                             />
                                          </a>
                                       </div>
                                       <div className="ec-blog-content">
                                          <h5 className="ec-blog-title">
                                             <a href="blog-detail-left-sidebar.html">
                                                Vogue Shopping Weekend 2021.
                                             </a>
                                          </h5>
                                          <div className="ec-blog-date">
                                             By <span>Mr Admin</span> / February 10, 2021-2022
                                          </div>
                                          <div className="ec-blog-desc">
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                             industry's standard dummy text ever since the 1500s,
                                          </div>
                                          <div className="ec-blog-btn">
                                             <a href="#" className="btn btn-primary">
                                                Read More
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-4 col-md-6 mb-6 ec-blog-block">
                                    <div className="ec-blog-inner">
                                       <div className="ec-blog-image">
                                          <a href="blog-detail-left-sidebar.html">
                                             <img
                                                className="blog-image"
                                                src="assets/images/blog-image/6.jpg"
                                                alt="Blog"
                                             />
                                          </a>
                                       </div>
                                       <div className="ec-blog-content">
                                          <h5 className="ec-blog-title">
                                             <a href="blog-detail-left-sidebar.html">
                                                The best fashion influencers.
                                             </a>
                                          </h5>
                                          <div className="ec-blog-date">
                                             By <span>Mr Admin</span> / February 10, 2021-2022
                                          </div>
                                          <div className="ec-blog-desc">
                                             Lorem Ipsum is simply dummy text of the printing and
                                             typesetting industry. Lorem Ipsum has been the
                                             industry's standard dummy text ever since the 1500s,
                                          </div>
                                          <div className="ec-blog-btn">
                                             <a href="#" className="btn btn-primary">
                                                Read More
                                             </a>
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
                        {/*Blog content End */}
                     </div>
                  </div>
               </div>
            </section>
         </>


         <Footer />
      </div>
   )
}
