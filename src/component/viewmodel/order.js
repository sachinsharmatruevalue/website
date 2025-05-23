import React, { useState } from "react";
import OrderServices from "../../services/orderServices";
import Pagetitle from "./pagetitle";
import useAsync from "../../Hooks/useAsync";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Order() {
  const { data, run } = useAsync(OrderServices.getAllOrders); // Fetching orders
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  console.log("data", data);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle Search Input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter Orders based on User or Product Name
  const filteredOrders =
    data?.filter((order) =>
      `${order?.userId?.name} ${order?.products
        ?.map((p) => p.productId?.name)
        .join(" ")}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) || [];

  const totalProducts = filteredOrders.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredOrders.slice(startIndex, endIndex);

  return (
    <div className="right_col" role="main">
      <Pagetitle />

      <div className="container-box px-0">
        <div className="container-box-top-header px-4">
          <div className="container-box-top-header-left-2">
            <input
              type="search"
              name="search"
              placeholder="Search by User "
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        <div className="container-box-inner">
          <table id="example" className="table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User Name</th>
                <th>Products Ordered</th>
                <th>Total Amount</th>
                <th>Shipping Address</th>
                <th>Alternate Address</th>{" "}
                {/* ✅ New Column for Another Address */}
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Payment Method</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts?.map((order) => (
                <tr key={order._id}>
                  <td>{order.orderId}</td>
                  <td>{order.userId?.name || "N/A"}</td>

                  <td>
                    {order.orderProducts?.map((product) => (
                      <div key={product._id} className="product-item">
                        {Array.isArray(product.productId?.images) &&
                        product.productId.images.length > 0 ? (
                          product.productId.images.map((img, index) => (
                            <img
                              key={index}
                              src={`http://localhost:4000/${img}`}
                              alt={`Product ${index + 1}`}
                              style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover",
                                borderRadius: "5px",
                                marginRight: "5px",
                                marginTop: "4px",
                              }}
                            />
                          ))
                        ) : (
                          <img
                            src="/placeholder.jpg"
                            alt="No Image Available"
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                              borderRadius: "5px",
                              marginRight: "5px",
                              marginTop: "4px",
                            }}
                          />
                        )}
                        {product.productId?.name} (Quantity {product.quantity})
                        (Size {product.size})
                      </div>
                    )) || "N/A"}
                  </td>

                  <td>${order.totalAmount}</td>
                  <td>{order.shippingDetails || "N/A"}</td>
                  <td>N/A</td>
                  <td>{order.orderStatus}</td>
                  <td>{order.paymentStatus}</td>
                  <td>{order.paymentMethod}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination Controls */}
        <div className="pagination-controls d-flex justify-content-center my-3">
          <button
            className="btn btn-sm btn-secondary mx-1"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm mx-1 ${
                currentPage === index + 1
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn btn-sm btn-secondary mx-1"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
