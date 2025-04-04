
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa6';
import { TiArrowRepeat } from 'react-icons/ti';
import { BsBasket3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Productservices from '../../services/productServices'
const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const userId = '67dbaad2f6c17a54b922abd2';
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [serach,setSerach]=useState('');

   

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Productservices.getproduct();
        // console.log("------->",response);
        // return

        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchProduct();
  }, []);




  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  // console.log("currentProducts-------",currentProducts);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // const addToCart = async (productId, quantity) => {
  //   const cartData = {
  //     userId: userId,
  //     productId: productId,
  //     quantity: quantity || 1,
  //   };

  //   try {
  //     const response = await axios.post('http://192.168.0.26:4000/api/cart/add-to-cart', cartData);
  //     setCart(response.data.cart);
  //   } catch (error) {
  //     console.error('Error adding to cart:', error);
  //   }
  // };






  return (
    <section className="section ec-trend-product section-space-p">
      <div className="container">
        <div className="row">
          {(
            <>
              <div className="ec-trend-sale" style={{ display: 'flex', flexWrap: 'wrap', width: '100%',justifyContent:'sapce-between'}}>
                {currentProducts.length > 0 ? (
                  currentProducts.map((product,_id) => (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content" key={product._id}>
                      <div className="ec-pro-image-outer">
                        <Link to={`/product-details/${product._id}`}>
                          <div className="ec-product-inner">
                            <div className="ec-pro-image">
                              <a href="product-left-sidebar.html" className="image">
                                <img
                                  className="main-image"
                                  src={`${process.env.REACT_APP_API_BASE_URL}/${product.images[0]}`}
                                  alt={product.name}
                                />
                              </a>
                              <div className="ec-pro-actions" style={{ alignItems: 'center' }}>
                                <Link to='/add-to-cart'>
                                  <button
                                    title="Add To Cart"
                                    className="add-to-cart"
                                  // onClick={() => addToCart(product._id, 1)}
                                  >
                                    <BsBasket3 style={{ fontSize: '12px', color: 'black' }} />
                                  </button>
                                </Link>
                                <a href="compare.html" className="ec-btn-group compare" title="Compare">
                                  <TiArrowRepeat />
                                </a>
                                <a
                                  href="#"
                                  className="ec-btn-group quickview"
                                  data-link-action="quickview"
                                  title="Quick view"
                                  data-bs-toggle="modal"
                                  data-bs-target="#ec_quickview_modal"
                                >
                                  <FaRegEye />
                                </a>
                                <a className="ec-btn-group wishlist" title="Wishlist">
                                  <FaRegHeart />
                                </a>
                              </div>
                            </div>
                          </div>
                        </Link>
                     <div className="ec-pro-content" style={{ padding: '7px 7px 17px 103px',fontSize:'18px' }}>
                          <h5 className="ec-pro-title" style={{fontSize:'larger'}}>
                            <a href="product-left-sidebar.html">{product.name}</a>
                          </h5>
                          <span className="ec-price" style={{fontSize:'20px',color:'Red'}}>
                            <span className="new-price">${product.price}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No products found.</div>
                )}
              </div>

              {/* Pagination */}
              <div className="ec-pro-pagination">
                <span>
                  Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} item(s)
                </span>
                <ul className="ec-pro-pagination-inner">
                  {Array.from({ length: Math.min(5, Math.ceil(products.length / productsPerPage)) }).map((_, index) => (
                    <li key={index}>
                      <a
                        className={currentPage === index + 1 ? 'active' : ''}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          paginate(index + 1);
                        }}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  {Math.ceil(products.length / productsPerPage) > 5 && (
                    <li>
                      <a className="next" href="#" onClick={(e) => {
                        e.preventDefault();
                        nextPage();
                      }}>
                        Next <i className="ecicon eci-angle-right" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;