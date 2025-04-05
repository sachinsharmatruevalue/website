import React, { useEffect, useState } from 'react';
import HomeHeader from '../HomeHeader';
import Footer from '../Footer';
import wishListServices from '../../services/wishListServices';

const WishList = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatPrice = (price) => {
        const num = Number(price);
        return isNaN(num) ? '0.00' : num.toFixed(2);
    };

    const getImageUrl = (imagePath) => {
        if (!imagePath) return "/admin/images/default-product.jpg";
        
        // If it's already a full URL or starts with /, return as-is
        if (imagePath.startsWith('http') || imagePath.startsWith('/')) {
            return imagePath;
        }
        
        // Otherwise, construct the full URL
        return `${process.env.REACT_APP_API_BASE_URL}/${imagePath.replace(/^\/+/, '')}`;
    };

    useEffect(() => {
        const fetchWishlistData = async () => {
            try {
                const response = await wishListServices.getAllWishList();
                console.log("response-->", response);

                if (response && response.data) {
                    setWishlist(response.data.items || response.data);
                } else {
                    setError("Invalid wishlist data format");
                }
                setLoading(false);
            } catch (error) {
                console.log("Error fetching wishlist:", error);
                setError("Failed to load wishlist");
                setLoading(false);
            }
        };
        fetchWishlistData();
    }, []);

    if (loading) {
        return (
            <>
                <HomeHeader />
                <div className="container text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading your wishlist...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <HomeHeader />
                <div className="container text-center py-5">
                    <div className="alert alert-danger">{error}</div>
                </div>
                <Footer />
            </>
        );
    }

    if (wishlist.length === 0) {
        return (
            <>
                <HomeHeader />
                <div className="container text-center py-5">
                    <h3>Your wishlist is empty</h3>
                    <p>You haven't added any items to your wishlist yet.</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <HomeHeader />
            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="ec-wish-rightside col-lg-12 col-md-12">
                            <div className="ec-compare-content">
                                <div className="ec-compare-inner">
                                    <div className="row margin-minus-b-30">
                                        {wishlist.map((item) => {
                                            const product = item.product || item;
                                            const mainImage = product.image 
                                                ? getImageUrl(product.image)
                                                : "/admin/images/default-product.jpg";
                                            
                                            const hoverImage = product.images?.length > 0
                                                ? getImageUrl(product.images[0])
                                                : mainImage;

                                            return (
                                                <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                                                    <div className="ec-product-inner">
                                                        <div className="ec-pro-image-outer">
                                                            <div className="ec-pro-image">
                                                                <a href={`/product/${product._id}`} className="image">
                                                                    <img
                                                                        className="main-image"
                                                                        src={mainImage}
                                                                        alt={product.name}
                                                                        onError={(e) => {
                                                                            e.target.src = "/admin/images/default-product.jpg";
                                                                        }}
                                                                    />
                                                                    <img
                                                                        className="hover-image"
                                                                        src={hoverImage}
                                                                        alt={product.name}
                                                                        onError={(e) => {
                                                                            e.target.src = "/admin/images/default-product.jpg";
                                                                        }}
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="ec-pro-content">
                                                            <h5 className="ec-pro-title">
                                                                <a href={`/product/${product._id}`}>
                                                                    {product.name}
                                                                </a>
                                                            </h5>
                                                            <div className="ec-pro-rating">
                                                                {[...Array(5)].map((_, i) => (
                                                                    <i
                                                                        key={i}
                                                                        className={`ecicon eci-star ${i < (product.rating || 0) ? 'fill' : ''}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <div className="ec-pro-list-desc">
                                                                {product.description}
                                                            </div>
                                                            <span className="ec-price">
                                                                {product.originalPrice > product.price && (
                                                                    <span className="old-price">
                                                                        ${formatPrice(product.originalPrice)}
                                                                    </span>
                                                                )}
                                                                <span className="new-price">
                                                                    ${formatPrice(product.price)}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default WishList;