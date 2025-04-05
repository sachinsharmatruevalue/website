import React, { useEffect, useState } from 'react';
import HomeHeader from '../HomeHeader'
import Footer from '../Footer'

import AddtoCartServices from '../../services/AddtoCart';

const AddToCart = () => {
    const [cart, setCart] = useState(null);
    const items = cart?.items || [];
    const subTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await AddtoCartServices.getAllCart();
            console.log("Cart fetched:", response.data);
            const cartArray = response.data;
            if (Array.isArray(cartArray) && cartArray.length > 0) {
              setCart(cartArray[0]);
            } else {
              setCart(null);
            }
          } catch (error) {
            console.error("Failed to fetch cart", error);
          }
        };
      
        fetchProducts();
      }, []);
      const handleRemove = async (cartId, itemId) => {
        try {
          await AddtoCartServices.removeFromCartItem(cartId, itemId);
          alert("Item removed from cart");
          const response = await AddtoCartServices.getAllCart();
          const updatedCart = response.data?.data?.[0] || null;
          setCart(updatedCart);
          
        } catch (err) {
          console.error("Failed to remove item", err);
          alert("Failed to remove item");
        }
      };
      const deliveryCharges = 80;
const couponDiscount = 0;

const totalAmount = subTotal + deliveryCharges - couponDiscount;

    return (
        <>
        <HomeHeader/>
            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="ec-cart-leftside col-lg-8 col-md-12 ">
                            {/* cart content Start */}
                            <div className="ec-cart-content">
                                <div className="ec-cart-inner">
                                    <div className="row">
                                        <form action="#">
                                            <div className="table-content cart-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th style={{ textAlign: "center" }}>Quantity</th>
                                                            <th>Total</th>
                                                            <th />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                            {items.length > 0 ? (
                              items.map((item, index) => {
                                const total =
                                  item?.price && item?.quantity
                                    ? item.price * item.quantity
                                    : 0;
                                return (
                                  <tr key={index}>
                                    <td className="ec-cart-pro-name">
                                      <span>
                                      <img
                                        className="ec-cart-pro-img mr-4"
                                        src={
                                            item?.productId?.images?.[0]
                                            ? `/` + item.productId.images[0] // adjust path if needed
                                            : "https://via.placeholder.com/50"
                                        }
                                        alt={item?.productId?.name || "Product image"}
                                        />
                                        {item?.productId?.name || "Unnamed Product"}
                                      </span>
                                    </td>
                                    <td className="ec-cart-pro-price">
                                      <span className="amount">
                                      ₹{item?.productId?.price?.toFixed(2) || "0.00"}
                                      </span>
                                    </td>
                                    <td
                                      className="ec-cart-pro-qty"
                                      style={{ textAlign: "center" }}
                                    >
                                      <div className="cart-qty-plus-minus">
                                        <input
                                          className="cart-plus-minus"
                                          type="text"
                                          name="cartqtybutton"
                                          value={item?.quantity}
                                          readOnly
                                        />
                                      </div>
                                    </td>
                                    <td className="ec-cart-pro-subtotal">
                                      ₹{total.toFixed(2)}
                                    </td>
                                    <td className="ec-cart-pro-remove">
                                                    <button className="btn btn-primary" onClick={() => handleRemove(cart._id, item._id)}>
                                                        Remove
                                                    </button>
                                                    </td>
                                  </tr>
                                );
                              })
                            ) : (
                                <tr>
                                <td colSpan="5" style={{ textAlign: "center" }}>
                                  🛒 Your cart is empty. <a href="#">Start Shopping</a>
                                </td>
                              </tr>
                            )}
                          </tbody>
                                                </table>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="ec-cart-update-bottom">
                                                        <a href="#">Continue Shopping</a>
                                                        <button className="btn btn-primary">Check Out</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/*cart content End */}
                        </div>
                        {/* Sidebar Area Start */}
                        <div className="ec-cart-rightside col-lg-4 col-md-12">
                            <div className="ec-sidebar-wrap">
                                {/* Sidebar Summary Block */}
                                <div className="ec-sidebar-block">
                                    <div className="ec-sb-title">
                                        <h3 className="ec-sidebar-title">Summary</h3>
                                    </div>
                                    <div className="ec-sb-block-content">
                                        <h4 className="ec-ship-title">Estimate Shipping</h4>
                                        <div className="ec-cart-form">
                                            <p>Enter your destination to get a shipping estimate</p>
                                            <form action="#" method="post">
                                                <span className="ec-cart-wrap">
                                                    <label>Country *</label>
                                                    <span className="ec-cart-select-inner">
                                                        <select
                                                            name="ec_cart_country"
                                                            id="ec-cart-select-country"
                                                            className="ec-cart-select"
                                                        >
                                                            <option selected="" disabled="">
                                                                United States
                                                            </option>
                                                            <option value={1}>India</option>
                                                            {/* <option value={2}>Country 2</option>
                                                            <option value={3}>Country 3</option>
                                                            <option value={4}>Country 4</option>
                                                            <option value={5}>Country 5</option> */}
                                                        </select>
                                                    </span>
                                                </span>
                                                <span className="ec-cart-wrap">
                                                    <label>State/Province</label>
                                                    <span className="ec-cart-select-inner">
                                                        <select
                                                            name="ec_cart_state"
                                                            id="ec-cart-select-state"
                                                            className="ec-cart-select"
                                                        >
                                                            <option selected="" disabled="">
                                                                Please Select a region, state
                                                            </option>
                                                            <option value={1}>Jaipur</option>
                                                            {/* <option value={2}>Region/State 2</option>
                                                            <option value={3}>Region/State 3</option>
                                                            <option value={4}>Region/State 4</option>
                                                            <option value={5}>Region/State 5</option> */}
                                                        </select>
                                                    </span>
                                                </span>
                                                <span className="ec-cart-wrap">
                                                    <label>Zip/Postal Code</label>
                                                    <input
                                                        type="text"
                                                        name="postalcode"
                                                        placeholder="Zip/Postal Code"
                                                    />
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="ec-sb-block-content">
                                                        <div className="ec-cart-summary-bottom">
                                                            <div className="ec-cart-summary">
                                                            <div>
                                                                <span className="text-left">Sub-Total</span>
                                                                <span className="text-right">₹{subTotal.toFixed(2)}</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-left">Delivery Charges</span>
                                                                <span className="text-right">₹{deliveryCharges.toFixed(2)}</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-left">Coupon Discount</span>
                                                                <span className="text-right">₹{couponDiscount.toFixed(2)}</span>
                                                            </div>

                                                            <div className="ec-cart-coupan-content">
                                                                <form
                                                                className="ec-cart-coupan-form"
                                                                name="ec-cart-coupan-form"
                                                                method="post"
                                                                action="#"
                                                                >
                                                                <input
                                                                    className="ec-coupan"
                                                                    type="text"
                                                                    required=""
                                                                    placeholder="Enter Your Coupon Code"
                                                                    name="ec-coupan"
                                                                />
                                                                <button
                                                                    className="ec-coupan-btn button btn-primary"
                                                                    type="submit"
                                                                    name="subscribe"
                                                                    value=""
                                                                >
                                                                    Apply
                                                                </button>
                                                                </form>
                                                            </div>

                                                            <div className="ec-cart-summary-total">
                                                                <span className="text-left">Total Amount</span>
                                                                <span className="text-right">₹{totalAmount.toFixed(2)}</span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                </div>
                                {/* Sidebar Summary Block */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Product Start */}
            

            <Footer/>
        </>
    )
}

export default AddToCart