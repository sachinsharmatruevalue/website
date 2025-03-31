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
  // console.log('id------', id);
  // console.log('product------',product);


  useEffect(() => {
    const fetchProductDetails = async (id) => {
      try {

        const response = await productDetailsServices.getById(id);
        // console.log("response----------", response);
        // return

        if (!response.data) {
          throw new Error('Product not found');
        }

        const productData = response.data;
        // console.log("productData---------", productData);
        // return
        if (productData.images && productData.images.length > 0) {
          productData.images = productData.images.map(img =>
            img.startsWith('http') ? img : `${process.env.REACT_APP_API_BASE_URL}/${img}`
          );
        }

        setProduct(response.productData);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetails(id);
    } else {
      setError("No product ID provided");
      setLoading(false);
      navigate('/'); // Redirect to home if no ID
    }
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
  if (error) return <div className="container py-5 text-center">Error: {error}</div>;
  if (!product) return <div className="container py-5 text-center">Product not found</div>;

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-lg-6">
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {product.images?.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === activeImageIndex ? 'active' : ''}`}
                >
                  <img
                    src={img}
                    className="d-block w-100 product-img"
                    alt={`Product view ${index + 1}`}
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
            >
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
        <div className="col-lg-6">
          <h1 className="product-title">{product.name}</h1>
          <div className="pricing-section">
            {product.oldPrice && (
              <span className="original-price">${product.oldPrice.toFixed(2)}</span>
            )}
            <span className="discounted-price">${product.price?.toFixed(2)}</span>
            {discount > 0 && (
              <span className="discount-badge">{discount}% OFF</span>
            )}
          </div>
          <div className="rating mt-3">
            <span className="stars">
              {'★'.repeat(Math.round(product.rating || 0))}
              {'☆'.repeat(5 - Math.round(product.rating || 0))}
            </span>
            {product.reviewCount && (
              <span className="rating-count">({product.reviewCount} reviews)</span>
            )}
          </div>
          <p className="product-description mt-4">
            {product.description || 'No description available'}
          </p>

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
            <button className="btn btn-outline-secondary btn-lg ms-3">
              ♥ Wishlist
            </button>
          </div>
        </div>
      </div>

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