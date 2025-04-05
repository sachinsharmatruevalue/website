import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaRegEye } from 'react-icons/fa';
import { BsBasket3 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Productservices from '../../services/productServices';
import { Modal, Button } from "react-bootstrap";
import HomeHeader from "../HomeHeader";
import Footer from "../Footer";
import { useCurrency } from "../CurrencyContent";
import AddtoCartServices from '../../services/AddtoCart';
const Products = () => {
  const { currency } = useCurrency();
  const [products, setProducts] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Productservices.getproduct();
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleQuickView = (product, event) => {
    event.preventDefault(); // Prevent navigation issues
    setSelectedProduct(product);
    setShowModal(true);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onSizeClick = (productId, size) => {
    const product = products.find((p) => p._id === productId);
    if (!product) return;

    const selectedSize = product.productkey?.find((item) => item.Size === size);
    if (!selectedSize) return;

    const finalPrice = selectedSize.OfferPrice > 0 
      ? product.price - selectedSize.OfferPrice
      : product.price;

    setSelectedPrices((prev) => ({
      ...prev,
      [productId]: finalPrice,
    }));
    
  };
  const handleAddToCart = async (product) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?._id;
  
    if (!userId) {
      console.error("User not logged in");
      return;
    }
  
    const body = {
      userId: userId,
      productId: product._id,
      quantity: 1
    };
  
    try {
      const response = await AddtoCartServices.addToCart(body);
      alert("Product is added to cart");
      console.log("Added to cart:", response); // ✅ log full response, not just `response.data`
    } catch (error) {
      console.error("Failed to add to cart", error);
    }
  };
  // const onsizeClick = (productId, size) => {
  //   console.log("Clicked Size:", size, "for Product ID:", productId);
  
  //   const product = products.find((p) => p._id === productId);
  //   if (!product) {
  //     console.error("Product not found!");
  //     return;
  //   }
  
  //   console.log("Found Product:", product);
  
  //   const selectedSize = product.productkey?.find((item) => item.Size === size);
  //   if (!selectedSize) {
  //     console.error("Selected size not found in product:", product);
  //     return;
  //   }
  
  //   // Debugging logs
  //   console.log("Selected Size:", selectedSize);
  //   console.log("Original Price:", product.originalPrice);
  //   console.log("Offer Price:", selectedSize.OfferPrice);
  
  //   // Ensure numeric values and fallback to `product.price` if `originalPrice` is missing
  //   const originalPrice = Number(product.originalPrice) || Number(product.price) || 0;
  //   const offerPrice = Number(selectedSize.OfferPrice) || 0;
  
  //   const finalPrice = offerPrice > 0 ? originalPrice - offerPrice : originalPrice;
  
  //   setSelectedPrices((prev) => ({
  //     ...prev,
  //     [productId]: finalPrice,
  //   }));
  
  //   console.log("Updated Price for Product:", productId, "Price:", finalPrice);
  // };

  return (
    <>
    <HomeHeader/>
    <section className="section ec-trend-product section-space-p">
      
      <div className="container">
       
        <div className="row">
          <div className="ec-trend-sale" style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ec-product-content" key={product._id}>
                  <div className="ec-pro-image-outer">
                    <div className="ec-product-inner">
                      <div className="ec-pro-image">
                        <Link to={`/product-details/${product._id}`} className="image">
                          <img
                            className="main-image"
                            src={`${process.env.REACT_APP_API_BASE_URL}/${product.images[0]}`}
                            alt={product.name}
                          />
                        </Link>
                        <div className="ec-pro-actions">
                          {/* Add to Cart Button */}
                           <button
                                                        title="Add To Cart"
                                                        className="add-to-cart"
                                                        onClick={() => handleAddToCart(product)}
                                                      >
                                                        <BsBasket3 style={{ fontSize: "12px", color: "black" }} />
                                                      </button>

                          {/* Quick View Button (Open Modal) */}
                          <button
                            onClick={(event) => handleQuickView(product, event)}
                            className="ec-btn-group quickview"
                          >
                            <FaRegEye />
                          </button>

                          {/* Wishlist Button */}
                          <button className="ec-btn-group wishlist" title="Wishlist">
                            <FaRegHeart />
                          </button>
                        </div>
                      </div>
                      <div className="ec-pro-content">
                        <h5 className="ec-pro-title">
                          <Link to={`/product-details/${product._id}`}>{product.name}</Link>
                        </h5>
                        <span className="ec-price">
                        <span className="old-price" style={{ textDecoration: 'line-through', color: 'gray' }}>
                        {currency.symbol}{product.Originalprice}
                          </span>
                          <span className="new-price">
                            
                          {currency.symbol}{selectedPrices[product._id] || product.price}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Size Selection Buttons */}
                    
                    {product.productkey?.map((item) => (
                  <button
                    key={item.Size}
                    className="btn btn-primary m-2"
                    onClick={() => onSizeClick(product._id, item.Size)}
                  >
                    {item.Size}
                  </button>
                ))}
                 
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
                  <button
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              {Math.ceil(products.length / productsPerPage) > 5 && (
                <li>
                  <button className="next" onClick={nextPage}>
                    Next <i className="ecicon eci-angle-right" />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg"  backdropClassName="modal-backdrop show">
  <Modal.Header closeButton style={{backgroundColor:'white'}}>
  </Modal.Header>
  <Modal.Body style={{backgroundColor:'white'}}>
    <div className="row">
      {/* Left Side - Product Images */}
      <div className="col-md-5">
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}/${selectedProduct?.images[0]}`}
          alt={selectedProduct?.name}
          className="w-100 mb-2"
          style={{ borderRadius: "10px", height:'80%' ,widht:'30px' }}
        />
        {/* Thumbnails */}
        <div className="d-flex">
          {selectedProduct?.images.map((img, index) => (
            <img
              key={index}
              src={`${process.env.REACT_APP_API_BASE_URL}/${img}`}
              alt={`Thumbnail ${index}`}
              className="img-thumbnail mx-1"
              style={{ width: "60px", height: "60px", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="col-md-3 mt-4">
  <h5>{selectedProduct?.name}</h5>
  <div className="d-flex align-items-center mt-3">
    <span className="text-muted text-decoration-line-through">
    {currency.symbol} {selectedProduct?.Originalprice}
    </span>
    <span className="fs-4 fw-bold text-dark ml-3">
    {currency.symbol}{selectedPrices[selectedProduct?._id] || selectedProduct?.price}
    </span>
  </div>

  {/* Size Selection */}
  <div className="mt-3">
    <h6>Select Size:</h6>
    {selectedProduct?.productkey?.map((size) => (
      <button
        key={size.Size}
        className="btn btn-primary m-1 mt-4"
        onClick={() => onSizeClick(selectedProduct._id, size.Size)}
      >
        {size.Size}
      </button>
    ))}
  </div>


        {/* Quantity Selection */}
        <div className="mt-3 d-flex align-items-center" style={{border:'1px solid black'}}>
  <button className="btn btn-outline-dark "  onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
  <span className="mx-3">{quantity}</span>
  <button className="btn btn-outline-dark" onClick={() => setQuantity(quantity + 1)}>+</button>
</div>

        {/* Add to Cart Button */}
        <button className="btn btn-dark mt-4 w-100">+ Add to Cart</button>
      </div>
    </div>
  </Modal.Body>
</Modal>
    </section>
    <Footer/>
    </>
  );
};

export default Products;
