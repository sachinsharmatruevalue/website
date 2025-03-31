import axios from 'axios'
import React, { useEffect, useState } from 'react';


const WishList = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const addWishlist = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://192.168.0.26:4000/api/wishlist/add-wishlist`)
            setWishlist(response.data);
            setLoading(false);
        }
        catch (error) {
            setError(error.message);
            setLoading(false);
        }
        addWishlist();
    };
    return (
        <>
            <h1>Your Wishlist</h1>
            <div className="wishlist-container">
                <div className="wishlist-item">
                    <div className="item-details">
                        <h3>Wireless Headphones</h3>
                        <p>High-quality sound and noise cancellation.</p>
                        <p className="price">$120.00</p>
                    </div>
                    <button className="remove-btn">Remove</button>
                </div>
                <div className="wishlist-item">
                    <div className="item-details">
                        <h3>Smartwatch</h3>
                        <p>Track your fitness and stay connected.</p>
                        <p className="price">$199.99</p>
                    </div>
                    <button className="remove-btn">Remove</button>
                </div>
                <div className="wishlist-item">
                    <div className="item-details">
                        <h3>Leather Jacket</h3>
                        <p>Stylish and comfortable for all occasions.</p>
                        <p className="price">$250.00</p>
                    </div>
                    <button className="remove-btn">Remove</button>
                </div>
                {/* You can add more wishlist items here */}
            </div>
        </>

    )
}

export default WishList
