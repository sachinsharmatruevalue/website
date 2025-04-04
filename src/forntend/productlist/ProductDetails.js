// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import "./ProductDetails.css";
// import productDetailsServices from '../../services/productDetailsServices';
// import wishListServices from '../../services/wishListServices';
// const ProductDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [wishlist, setWishlist] = useState('');

//   useEffect(() => {
//     if (!id) {
//       setError("No product ID provided");
//       setLoading(false);
//       setTimeout(() => navigate('/'), 2000);
//       return;
//     }
//     const fetchProductDetails = async () => {
//       try {
//         const response = await productDetailsServices.getById(id);
//         if (!response.data) {
//           throw new Error('Product not found');
//         }
//         let productData = response.data;
//         // Fix image URLs
//         if (productData.images && productData.images.length > 0) {
//           productData.images = productData.images.map(img =>
//             img.startsWith('http') ? img : `${process.env.REACT_APP_API_BASE_URL}/${img}`
//           );
//         }
//         setProduct(productData);
//       } catch (err) {
//         console.error("Error fetching product details:", err);
//         setError(err.message || "Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProductDetails();
//   }, [id, navigate]);

//   const addToWishList = async () => {
//     try {

//       const response = await wishListServices.createbwishList();
//       console.log('response-', response);
//       setWishlist(response)

//     } catch (error) {
//       console.log('error', error);


//     }


//   }

//   const handleImageError = (e) => {
//     e.target.src = '/default-product.jpg';
//     e.target.className = 'd-block w-100 product-img img-error';
//     e.target.alt = 'Product image not available';
//   };
//   const handleThumbnailClick = (index) => {
//     setActiveImageIndex(index);
//   };
//   if (loading) return <div className="container py-5 text-center">Loading product details...</div>;
//   if (error) return <div className="container py-5 text-center text-danger">Error: {error}</div>;
//   if (!product) return <div className="container py-5 text-center">Product not found</div>;
//   const discount = product.oldPrice
//     ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
//     : 0;
//   return (
//     <div className="container-fluid py-5">
//       <div className="row">
//         {/* Product Images */}
//         <div className="col-lg-6">
//           <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//               {product.images?.map((img, index) => (
//                 <div key={index} className={`carousel-item ${index === activeImageIndex ? 'active' : ''}`}>
//                   <img
//                     src={img}
//                     className="d-block w-100 product-img"
//                     alt={`Product view ${index + 1}`}
//                     onError={handleImageError}
//                   />
//                 </div>
//               ))}
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon" />
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
//               <span className="carousel-control-next-icon" />
//             </button>
//           </div>
//           <div className="d-flex justify-content-center mt-3">
//             {product.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 className={`thumbnail-img mx-2 ${index === activeImageIndex ? 'active-thumbnail' : ''}`}
//                 alt={`Thumbnail ${index + 1}`}
//                 onClick={() => handleThumbnailClick(index)}
//                 onError={handleImageError}
//               />
//             ))}
//           </div>
//         </div>
//         {/* Product Details */}
//         <div className="col-lg-6">
//           <h1 className="product-title">{product.name}</h1>
//           <div className="pricing-section">
//             {product.oldPrice && <span className="original-price">${product.oldPrice.toFixed(2)}</span>}
//             <span className="discounted-price">${product.price?.toFixed(2)}</span>
//             {discount > 0 && <span className="discount-badge">{discount}% OFF</span>}
//           </div>
//           <div className="rating mt-3">
//             <span className="stars">
//               {'★'.repeat(Math.round(product.rating || 0))}
//               {'☆'.repeat(5 - Math.round(product.rating || 0))}
//             </span>
//             {product.reviewCount && <span className="rating-count">({product.reviewCount} reviews)</span>}
//           </div>
//           <p className="product-description mt-4">{product.description || 'No description available'}</p>
//           {product.specifications && (
//             <div className="specs-section mt-4">
//               <h3>Specifications</h3>
//               <table className="table">
//                 <tbody>
//                   {Object.entries(product.specifications).map(([key, value]) => (
//                     <tr key={key}>
//                       <td>{key}</td>
//                       <td>{value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//           <div className="action-buttons mt-4">
//             <Link to='/add-to-cart'><button className="btn btn-primary btn-lg">Add to Cart</button></Link>
//             <button className="btn btn-success btn-lg ms-3">Buy Now</button>
//             <button className="btn btn-outline-secondary btn-lg ms-3">:hearts: Wishlist</button>
//           </div>
//         </div>
//       </div>
//       {/* Reviews Section */}
//       {product.reviews && product.reviews.length > 0 && (
//         <div className="row mt-5">
//           <div className="col-12">
//             <h3>Customer Reviews</h3>
//             {product.reviews.map((review, index) => (
//               <div key={index} className="review-card mb-3">
//                 <div className="stars">
//                   {'★'.repeat(Math.round(review.rating))}
//                   {'☆'.repeat(5 - Math.round(review.rating))}
//                 </div>
//                 <p className="review-text">{review.comment}</p>
//                 <p className="reviewer">- {review.userName || 'Anonymous'}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default ProductDetails


















// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import "./ProductDetails.css";
// import productDetailsServices from '../../services/productDetailsServices';
// import wishListServices from '../../services/wishListServices';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductDetails = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const [wishlistLoading, setWishlistLoading] = useState(false);

//   useEffect(() => {
//     if (!id) {
//       setError("No product ID provided");
//       setLoading(false);
//       setTimeout(() => navigate('/'), 2000);
//       return;
//     }

//     const fetchProductDetails = async () => {
//       try {
//         const response = await productDetailsServices.getById(id);
//         if (!response.data) {
//           throw new Error('Product not found');
//         }
//         let productData = response.data;

//         if (productData.images && productData.images.length > 0) {
//           productData.images = productData.images.map(img =>
//             img.startsWith('http') ? img : `${process.env.REACT_APP_API_BASE_URL}/${img}`
//           );
//         }

//         setProduct(productData);
//         checkWishlistStatus(id); // Check if product is in wishlist
//       } catch (err) {
//         console.error("Error fetching product details:", err);
//         setError(err.message || "Failed to load product details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductDetails();
//   }, [id, navigate]);

//   const checkWishlistStatus = async (productId) => {
//     try {
//       const response = await wishListServices.createbwishList();
//       if (response.data) {
//         const exists = response.data.some(item => item.productId === productId);
//         setIsInWishlist(exists);
//       }
//     } catch (error) {
//       console.error("Error checking wishlist:", error);
//     }
//   };

//   const handleWishlistToggle = async () => {
//     setWishlistLoading(true);
//     try {
//       if (isInWishlist) {
//         // Remove from wishlist
//         await wishListServices.removeFromWishlist(id);
//         toast.success("Removed from wishlist");
//       } else {
//         // Add to wishlist
//         await wishListServices.addToWishlist(id);
//         toast.success("Added to wishlist");
//       }
//       setIsInWishlist(!isInWishlist);
//     } catch (error) {
//       console.error("Wishlist error:", error);
//       toast.error(error.response?.data?.message || "Wishlist operation failed");
//     } finally {
//       setWishlistLoading(false);
//     }
//   };

//   const handleImageError = (e) => {
//     e.target.src = '/default-product.jpg';
//     e.target.className = 'd-block w-100 product-img img-error';
//     e.target.alt = 'Product image not available';
//   };

//   const handleThumbnailClick = (index) => {
//     setActiveImageIndex(index);
//   };

//   if (loading) return <div className="container py-5 text-center">Loading product details...</div>;
//   if (error) return <div className="container py-5 text-center text-danger">Error: {error}</div>;
//   if (!product) return <div className="container py-5 text-center">Product not found</div>;

//   const discount = product.oldPrice
//     ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
//     : 0;

//   return (
//     <div className="container-fluid py-5">
//       <div className="row">
//         {/* Product Images */}
//         <div className="col-lg-6">
//           <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//               {product.images?.map((img, index) => (
//                 <div key={index} className={`carousel-item ${index === activeImageIndex ? 'active' : ''}`}>
//                   <img
//                     src={img}
//                     className="d-block w-100 product-img"
//                     alt={`Product view ${index + 1}`}
//                     onError={handleImageError}
//                   />
//                 </div>
//               ))}
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon" />
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
//               <span className="carousel-control-next-icon" />
//             </button>
//           </div>
//           <div className="d-flex justify-content-center mt-3">
//             {product.images?.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 className={`thumbnail-img mx-2 ${index === activeImageIndex ? 'active-thumbnail' : ''}`}
//                 alt={`Thumbnail ${index + 1}`}
//                 onClick={() => handleThumbnailClick(index)}
//                 onError={handleImageError}
//               />
//             ))}
//           </div>
//         </div>
//         {/* Product Details */}
//         <div className="col-lg-6">
//           <h1 className="product-title">{product.name}</h1>
//           <div className="pricing-section">
//             {product.oldPrice && <span className="original-price">${product.oldPrice.toFixed(2)}</span>}
//             <span className="discounted-price">${product.price?.toFixed(2)}</span>
//             {discount > 0 && <span className="discount-badge">{discount}% OFF</span>}
//           </div>
//           <div className="rating mt-3">
//             <span className="stars">
//               {'★'.repeat(Math.round(product.rating || 0))}
//               {'☆'.repeat(5 - Math.round(product.rating || 0))}
//             </span>
//             {product.reviewCount && <span className="rating-count">({product.reviewCount} reviews)</span>}
//           </div>
//           <p className="product-description mt-4">{product.description || 'No description available'}</p>
//           {product.specifications && (
//             <div className="specs-section mt-4">
//               <h3>Specifications</h3>
//               <table className="table">
//                 <tbody>
//                   {Object.entries(product.specifications).map(([key, value]) => (
//                     <tr key={key}>
//                       <td>{key}</td>
//                       <td>{value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//           <div className="action-buttons mt-4">
//             <Link to='/add-to-cart'><button className="btn btn-primary btn-lg">Add to Cart</button></Link>
//             <button className="btn btn-success btn-lg ms-3">Buy Now</button>
//             <button 
//               className={`btn btn-lg ms-3 ${isInWishlist ? 'btn-danger' : 'btn-outline-secondary'}`}
//               onClick={handleWishlistToggle}
//               disabled={wishlistLoading}
//             >
//               {wishlistLoading ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//                   {' Processing...'}
//                 </>
//               ) : isInWishlist ? (
//                 '❤️ Remove from Wishlist'
//               ) : (
//                 '♡ Add to Wishlist'
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Reviews Section */}
//       {product.reviews && product.reviews.length > 0 && (
//         <div className="row mt-5">
//           <div className="col-12">
//             <h3>Customer Reviews</h3>
//             {product.reviews.map((review, index) => (
//               <div key={index} className="review-card mb-3">
//                 <div className="stars">
//                   {'★'.repeat(Math.round(review.rating))}
//                   {'☆'.repeat(5 - Math.round(review.rating))}
//                 </div>
//                 <p className="review-text">{review.comment}</p>
//                 <p className="reviewer">- {review.userName || 'Anonymous'}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;





import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './ProductDetails.css';
import productDetailsServices from '../../services/productDetailsServices';
import wishListServices from '../../services/wishListServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  console.log('isInWishlist-------',isInWishlist);
  

  const userId = '67cec5761d62e746aaf44b70'; 

  useEffect(() => {
    if (!id) {
      setError('No product ID provided');
      setLoading(false);
      setTimeout(() => navigate('/'), 2000);
      return;
    }

    const fetchProductDetails = async () => {
      try {
        const response = await productDetailsServices.getById(id);
        if (!response.data) {
          throw new Error('Product not found');
        }
        let productData = response.data;

        if (productData.images && productData.images.length > 0) {
          productData.images = productData.images.map(img =>
            img.startsWith('http') ? img : `${process.env.REACT_APP_API_BASE_URL}/${img}`
          );
        }

        setProduct(productData);
        checkWishlistStatus(id); // Check if product is in wishlist
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError(err.message || 'Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id, navigate]);

  const checkWishlistStatus = async (productId) => {
    try {
      const response = await wishListServices.createbwishList(userId); // Assuming GET request for wishlist
      if (response.data) {
        const exists = response.data.some(item => item.productId === productId);
        setIsInWishlist(exists);
      }
    } catch (error) {
      console.error('Error checking wishlist:', error);
    }
  };

  const handleWishlistToggle = async () => {
    setWishlistLoading(true);
    try {
      if (isInWishlist) {
        // Remove from wishlist
        await wishListServices.removeFromWishlist(userId, id);
        toast.success('Removed from wishlist');
      } else {
        // Add to wishlist
        await wishListServices.addToWishlist(userId, id);
        toast.success('Added to wishlist');
      
        navigate('/wishlist');
      }
      setIsInWishlist(!isInWishlist);
    } catch (error) {
      console.error('Wishlist error:', error);
      toast.error(error.response?.data?.message || 'Wishlist operation failed');
    } finally {
      setWishlistLoading(false);
    }
  };

  const handleImageError = (e) => {
    e.target.src = '/default-product.jpg';
    e.target.className = 'd-block w-100 product-img img-error';
    e.target.alt = 'Product image not available';
  };

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  if (loading) return <div className="container py-5 text-center">Loading product details...</div>;
  if (error) return <div className="container py-5 text-center text-danger">Error: {error}</div>;
  if (!product) return <div className="container py-5 text-center">Product not found</div>;

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    // <div className="container-fluid py-5">
    //   <div className="row">
    //     {/* Product Images */}
    //     <div className="col-lg-6">
    //       <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
    //         <div className="carousel-inner">
    //           {product.images?.map((img, index) => (
    //             <div key={index} className={`carousel-item ${index === activeImageIndex ? 'active' : ''}`}>
    //               <img
    //                 src={img}
    //                 className="d-block w-100 product-img"
    //                 alt={`Product view ${index + 1}`}
    //                 onError={handleImageError}
    //               />
    //             </div>
    //           ))}
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
    //           <span className="carousel-control-prev-icon" />
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
    //           <span className="carousel-control-next-icon" />
    //         </button>
    //       </div>
    //       <div className="d-flex justify-content-center mt-3">
    //         {product.images?.map((img, index) => (
    //           <img
    //             key={index}
    //             src={img}
    //             className={`thumbnail-img mx-2 ${index === activeImageIndex ? 'active-thumbnail' : ''}`}
    //             alt={`Thumbnail ${index + 1}`}
    //             onClick={() => handleThumbnailClick(index)}
    //             onError={handleImageError}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //     {/* Product Details */}
    //     <div className="col-lg-6">
    //       <h1 className="product-title">{product.name}</h1>
    //       <div className="pricing-section">
    //         {product.oldPrice && <span className="original-price">${product.oldPrice.toFixed(2)}</span>}
    //         <span className="discounted-price">${product.price?.toFixed(2)}</span>
    //         {discount > 0 && <span className="discount-badge">{discount}% OFF</span>}
    //       </div>
    //       <div className="rating mt-3">
    //         <span className="stars">
    //           {'★'.repeat(Math.round(product.rating || 0))}
    //           {'☆'.repeat(5 - Math.round(product.rating || 0))}
    //         </span>
    //         {product.reviewCount && <span className="rating-count">({product.reviewCount} reviews)</span>}
    //       </div>
    //       <p className="product-description mt-4">{product.description || 'No description available'}</p>
    //       {product.specifications && (
    //         <div className="specs-section mt-4">
    //           <h3>Specifications</h3>
    //           <table className="table">
    //             <tbody>
    //               {Object.entries(product.specifications).map(([key, value]) => (
    //                 <tr key={key}>
    //                   <td>{key}</td>
    //                   <td>{value}</td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //       )}
    //       <div className="action-buttons mt-4">
    //         <Link to='/add-to-cart'><button className="btn btn-primary btn-lg">Add to Cart</button></Link>
    //         <button className="btn btn-success btn-lg ms-3">Buy Now</button>
    //         <button
    //           className={`btn btn-lg ms-3 ${isInWishlist ? 'btn-danger' : 'btn-outline-secondary'}`}
    //           onClick={handleWishlistToggle}
    //           disabled={wishlistLoading}
    //         >
    //           {wishlistLoading ? (
    //             <>
    //               <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    //               {' Processing...'}
    //             </>
    //           ) : (
    //             <>
    //               <span className="wishlist-heart-icon" style={{'font-size':' 1.5rem',  'margin-right':' 8px'}}>
    //                 {isInWishlist ? '❤️' : '♡'} {/* Heart icon that toggles */}
    //               </span>
    //               {isInWishlist ? ' Remove from Wishlist' : ' Add to Wishlist'}
    //             </>
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Reviews Section */}
    //   {product.reviews && product.reviews.length > 0 && (
    //     <div className="row mt-5">
    //       <div className="col-12">
    //         <h3>Customer Reviews</h3>
    //         {product.reviews.map((review, index) => (
    //           <div key={index} className="review-card mb-3">
    //             <div className="stars">
    //               {'★'.repeat(Math.round(review.rating))}
    //               {'☆'.repeat(5 - Math.round(review.rating))}
    //             </div>
    //             <p className="review-text">{review.comment}</p>
    //             <p className="reviewer">- {review.userName || 'Anonymous'}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </div>


<section className="ec-page-content section-space-p">
  <div className="container">
    <div className="row">
      <div className="ec-pro-rightside ec-common-rightside col-lg-12 col-md-12">
        {/* Single product content Start */}
        <div className="single-pro-block">
          <div className="single-pro-inner">
            <div className="row">
              <div className="single-pro-img single-pro-img-no-sidebar">
                <div className="single-product-scroll">
                  <div className="single-product-cover">
                    {product.images && product.images.map((image, index) => (
                      <div 
                        key={index} 
                        className={`single-slide zoom-image-hover ${index === activeImageIndex ? 'active' : ''}`}
                      >
                        <img
                          className="img-responsive"
                          src={image}
                          alt={product.name}
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="single-nav-thumb">
                    {product.images && product.images.map((image, index) => (
                      <div 
                        key={index} 
                        className={`single-slide ${index === activeImageIndex ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <img
                          className="img-responsive"
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          onError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="single-pro-desc single-pro-desc-no-sidebar">
                <div className="single-pro-content">
                  <h5 className="ec-single-title">{product.name}</h5>
                  <div className="ec-single-rating-wrap">
                    <div className="ec-single-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i 
                          key={star} 
                          className={`ecicon ${star <= (product.rating || 0) ? 'eci-star fill' : 'eci-star-o'}`} 
                        />
                      ))}
                    </div>
                    <span className="ec-read-review">
                      <a href="#ec-spt-nav-review">
                        {product.reviews && product.reviews.length > 0 
                          ? `${product.reviews.length} reviews` 
                          : 'Be the first to review this product'}
                      </a>
                    </span>
                  </div>
                  <div className="ec-single-desc">
                    {product.description || 'No description available'}
                  </div>
                  
                  {product.stockQuantity && product.stockQuantity < 10 && (
                    <div className="ec-single-sales">
                      <div className="ec-single-sales-inner">
                        <div className="ec-single-sales-title">sales accelerators</div>
                        <div className="ec-single-sales-visitor">
                          real time <span>{Math.floor(Math.random() * 10) + 1}</span> visitor right now!
                        </div>
                        <div className="ec-single-sales-progress">
                          <span className="ec-single-progress-desc">
                            Hurry up! left {product.stockQuantity} in stock
                          </span>
                          <span 
                            className="ec-single-progressbar" 
                            style={{ width: `${(product.stockQuantity / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="ec-single-price-stoke">
                    <div className="ec-single-price">
                      <span className="ec-single-ps-title">As low as</span>
                      <span className="new-price">${product.price.toFixed(2)}</span>
                      {product.oldPrice && (
                        <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                      )}
                      {discount > 0 && (
                        <span className="discount-percent">-{discount}%</span>
                      )}
                    </div>
                    <div className="ec-single-stoke">
                      <span className="ec-single-ps-title">
                        {product.stockQuantity > 0 ? 'IN STOCK' : 'OUT OF STOCK'}
                      </span>
                      {product.sku && (
                        <span className="ec-single-sku">SKU#: {product.sku}</span>
                      )}
                    </div>
                  </div>
                  
                  {product.variants && (
                    <div className="ec-pro-variation">
                      {product.variants.sizes && product.variants.sizes.length > 0 && (
                        <div className="ec-pro-variation-inner ec-pro-variation-size">
                          <span>SIZE</span>
                          <div className="ec-pro-variation-content">
                            <ul>
                              {product.variants.sizes.map((size, index) => (
                                <li key={index} className={index === 0 ? 'active' : ''}>
                                  <span>{size}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {product.variants.colors && product.variants.colors.length > 0 && (
                        <div className="ec-pro-variation-inner ec-pro-variation-color">
                          <span>Color</span>
                          <div className="ec-pro-variation-content">
                            <ul>
                              {product.variants.colors.map((color, index) => (
                                <li key={index} className={index === 0 ? 'active' : ''}>
                                  <span style={{ backgroundColor: color.code }} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="ec-single-qty">
                    <div className="qty-plus-minus">
                      <input
                        className="qty-input"
                        type="number"
                        name="ec_qtybtn"
                        min="1"
                        max={product.stockQuantity || 10}
                        defaultValue="1"
                      />
                    </div>
                    <div className="ec-single-cart">
                      <button 
                        className="btn btn-primary"
                        disabled={product.stockQuantity <= 0}
                      >
                        {product.stockQuantity > 0 ? 'Add To Cart' : 'Out of Stock'}
                      </button>
                    </div>
                    <div className="ec-single-wishlist">
                      <button 
                        className={`ec-btn-group wishlist ${isInWishlist ? 'active' : ''}`}
                        title="Wishlist"
                        onClick={handleWishlistToggle}
                        disabled={wishlistLoading}
                      >
                        <i className="fi-rr-heart" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="ec-single-social">
                    <ul className="mb-0">
                      <li className="list-inline-item facebook">
                        <a href="#">
                          <i className="ecicon eci-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item twitter">
                        <a href="#">
                          <i className="ecicon eci-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item instagram">
                        <a href="#">
                          <i className="ecicon eci-instagram" />
                        </a>
                      </li>
                      <li className="list-inline-item pinterest">
                        <a href="#">
                          <i className="ecicon eci-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Single product content End */}
        
        {/* Single product tab start */}
        <div className="ec-single-pro-tab">
          <div className="ec-single-pro-tab-wrapper">
            <div className="ec-single-pro-tab-nav">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#ec-spt-nav-details"
                    role="tab"
                    aria-controls="ec-spt-nav-details"
                    aria-selected="true"
                  >
                    Detail
                  </a>
                </li>
                {product.additionalInfo && (
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#ec-spt-nav-info"
                      role="tab"
                      aria-controls="ec-spt-nav-info"
                      aria-selected="false"
                    >
                      More Information
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#ec-spt-nav-review"
                    role="tab"
                    aria-controls="ec-spt-nav-review"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content ec-single-pro-tab-content">
              <div
                id="ec-spt-nav-details"
                className="tab-pane fade show active"
              >
                <div className="ec-single-pro-tab-desc">
                  <p>{product.longDescription || product.description || 'No detailed description available'}</p>
                  {product.features && product.features.length > 0 && (
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
              {product.additionalInfo && (
                <div id="ec-spt-nav-info" className="tab-pane fade">
                  <div className="ec-single-pro-tab-moreinfo">
                    <ul>
                      {Object.entries(product.additionalInfo).map(([key, value]) => (
                        <li key={key}>
                          <span>{key}</span> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              <div id="ec-spt-nav-review" className="tab-pane fade">
                <div className="row">
                  {product.reviews && product.reviews.length > 0 ? (
                    <div className="ec-t-review-wrapper">
                      {product.reviews.map((review, index) => (
                        <div className="ec-t-review-item" key={index}>
                          <div className="ec-t-review-avtar">
                            <img 
                              src={review.userAvatar || '/default-avatar.jpg'} 
                              alt={review.userName} 
                              onError={handleImageError}
                            />
                          </div>
                          <div className="ec-t-review-content">
                            <div className="ec-t-review-top">
                              <div className="ec-t-review-name">{review.userName}</div>
                              <div className="ec-t-review-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <i 
                                    key={star} 
                                    className={`ecicon ${star <= review.rating ? 'eci-star fill' : 'eci-star-o'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="ec-t-review-bottom">
                              <p>{review.comment}</p>
                              {review.date && (
                                <div className="ec-t-review-date">
                                  {new Date(review.date).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="ec-t-review-wrapper">
                      <p>No reviews yet. Be the first to review this product!</p>
                    </div>
                  )}
                  
                  <div className="ec-ratting-content">
                    <h3>Add a Review</h3>
                    <div className="ec-ratting-form">
                      <form action="#">
                        <div className="ec-ratting-star">
                          <span>Your rating:</span>
                          <div className="ec-t-review-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <i 
                                key={star} 
                                className="ecicon eci-star-o star-selectable"
                                onClick={() => console.log('Selected rating:', star)}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="ec-ratting-input">
                          <input
                            name="your-name"
                            placeholder="Name"
                            type="text"
                            required
                          />
                        </div>
                        <div className="ec-ratting-input">
                          <input
                            name="your-email"
                            placeholder="Email*"
                            type="email"
                            required
                          />
                        </div>
                        <div className="ec-ratting-input form-submit">
                          <textarea
                            name="your-commemt"
                            placeholder="Enter Your Comment"
                            required
                          />
                          <button
                            className="btn btn-primary"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product details description area end */}
      </div>
    </div>
  </div>
</section>
    
  );
};

export default ProductDetails;






