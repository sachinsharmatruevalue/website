import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./ProductDetails.css";
import productDetailsServices from '../../services/productDetailsServices';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      setTimeout(() => navigate('/'), 2000); // Redirect to home after 2 seconds
      return;
    }

    const fetchProductDetails = async () => {
      try {
        const response = await productDetailsServices.getById(id);
        
        if (!response.data) {
          throw new Error('Product not found');
        }

        let productData = response.data;

        // Fix image URLs
        if (productData.images && productData.images.length > 0) {
          productData.images = productData.images.map(img =>
            img.startsWith('http') ? img : `${process.env.REACT_APP_API_BASE_URL}/${img}`
          );
        }

        setProduct(productData); // Corrected state update
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError(err.message || "Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id, navigate]);

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
    <div className="container-fluid py-5">
      <div className="row">
        {/* Product Images */}
        <div className="col-lg-6">
          <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {product.images?.map((img, index) => (
                <div key={index} className={`carousel-item ${index === activeImageIndex ? 'active' : ''}`}>
                  <img
                    src={img}
                    className="d-block w-100 product-img"
                    alt={`Product view ${index + 1}`}
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" />
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" />
            </button>
          </div>
          <div className="d-flex justify-content-center mt-3">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`thumbnail-img mx-2 ${index === activeImageIndex ? 'active-thumbnail' : ''}`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
                onError={handleImageError}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="col-lg-6">
          <h1 className="product-title">{product.name}</h1>
          <div className="pricing-section">
            {product.oldPrice && <span className="original-price">${product.oldPrice.toFixed(2)}</span>}
            <span className="discounted-price">${product.price?.toFixed(2)}</span>
            {discount > 0 && <span className="discount-badge">{discount}% OFF</span>}
          </div>
          <div className="rating mt-3">
            <span className="stars">
              {'★'.repeat(Math.round(product.rating || 0))}
              {'☆'.repeat(5 - Math.round(product.rating || 0))}
            </span>
            {product.reviewCount && <span className="rating-count">({product.reviewCount} reviews)</span>}
          </div>
          <p className="product-description mt-4">{product.description || 'No description available'}</p>

          {product.specifications && (
            <div className="specs-section mt-4">
              <h3>Specifications</h3>
              <table className="table">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="action-buttons mt-4">
            <button className="btn btn-primary btn-lg">Add to Cart</button>
            <button className="btn btn-success btn-lg ms-3">Buy Now</button>
            <button className="btn btn-outline-secondary btn-lg ms-3">♥ Wishlist</button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="row mt-5">
          <div className="col-12">
            <h3>Customer Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className="review-card mb-3">
                <div className="stars">
                  {'★'.repeat(Math.round(review.rating))}
                  {'☆'.repeat(5 - Math.round(review.rating))}
                </div>
                <p className="review-text">{review.comment}</p>
                <p className="reviewer">- {review.userName || 'Anonymous'}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import './ProductDetails.css';
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
//   console.log('isInWishlist-------',isInWishlist);
//   const userId = '67cec5761d62e746aaf44b70';
//   useEffect(() => {
//     if (!id) {
//       setError('No product ID provided');
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
//         console.error('Error fetching product details:', err);
//         setError(err.message || 'Failed to load product details');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProductDetails();
//   }, [id, navigate]);
//   const checkWishlistStatus = async (productId) => {
//     try {
//       const response = await wishListServices.createbwishList(userId); // Assuming GET request for wishlist
//       if (response.data) {
//         const exists = response.data.some(item => item.productId === productId);
//         setIsInWishlist(exists);
//       }
//     } catch (error) {
//       console.error('Error checking wishlist:', error);
//     }
//   };
//   const handleWishlistToggle = async () => {
//     setWishlistLoading(true);
//     try {
//       if (isInWishlist) {
//         // Remove from wishlist
//         await wishListServices.removeFromWishlist(userId, id);
//         toast.success('Removed from wishlist');
//       } else {
//         // Add to wishlist
//         await wishListServices.addToWishlist(userId, id);
//         toast.success('Added to wishlist');
//         navigate('/wishlist');
//       }
//       setIsInWishlist(!isInWishlist);
//     } catch (error) {
//       console.error('Wishlist error:', error);
//       toast.error(error.response?.data?.message || 'Wishlist operation failed');
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
//               ) : (
//                 <>
//                   <span className="wishlist-heart-icon" style={{'font-size':' 1.5rem',  'margin-right':' 8px'}}>
//                     {isInWishlist ? ':heart:' : '♡'} {/* Heart icon that toggles */}
//                   </span>
//                   {isInWishlist ? ' Remove from Wishlist' : ' Add to Wishlist'}
//                 </>
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