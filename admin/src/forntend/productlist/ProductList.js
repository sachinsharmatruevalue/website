import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductServices from '../../services/productServices';
import HomeHeader from "../HomeHeader";
import Footer from "../Footer";
import { Link } from 'react-router-dom';
const ProductList = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const { type, id } = useParams();
   const location = useLocation();
     const [selectedPrices, setSelectedPrices] = useState({});

   // console.log("products------------->", products);



   useEffect(() => {
      const fetchProducts = async () => {
         try {
            setLoading(true);
            let response;

            if (type === 'category') {
               response = await ProductServices.getProductCategory(id);
            } else if (type === 'subcategory') {
               response = await ProductServices.getProductSubCategory(id);
            } else {

               response = await ProductServices.getproduct();
            }

            if (response && response.data) {
               setProducts(response.data);
            }
         } catch (error) {
            console.error('Error fetching products:', error);
         } finally {
            setLoading(false);
         }
      };

      fetchProducts();
   }, [type, id]);

   if (loading) {
      return <div className="container py-5 text-center">Loading products...</div>;
   }
   
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

   return (
      <>
        <HomeHeader />
    
        <div className="container py-5">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading products...</p>
            </div>
          ) : (
            <>
              {/* <h2 className="mb-5 text-center">
                {type === 'category' ? 'Category' : 'Subcategory'} Products
              </h2> */}
    
              <div className="row g-4">
                {products.length > 0 ? (
                  products.map((product) => (
                     <div className="col-sm-6 col-md-4 col-lg-3" key={product._id}>
                     <div className="card border-0 shadow-sm p-3 rounded-4">
                       <img
                         src={`${process.env.REACT_APP_API_BASE_URL}/${product.images[0]}`}
                         className="card-img-top rounded-3"
                         alt={product.name}
                         style={{ height: "300px", objectFit: "cover" }}
                       />
                       <div className="card-body ">
                         <h5 className="card-title">
                           <Link to={`/product-details/${product._id}`} className="text-dark text-decoration-none">
                             {product.name}
                           </Link>
                         </h5>
                   
                         {/* Price with discount */}
                         <div className="mb-3">
                           <span className="text-muted text-decoration-line-through me-3">
                             ${product.Originalprice}
                           </span>
                           <span className="fw-bold text-danger fs-5">
                             ${selectedPrices[product._id] || product.price}
                           </span>
                         </div>
                   
                         {/* Size selection inside the box */}
                         <div className="d-flex justify-content-center gap-2">
                           {["S", "M"].map((size) => (
                             <button
                               key={size}
                               className="btn btn-dark btn-sm "
                               onClick={() => onSizeClick(product._id, size)}
                             >
                               {size}
                             </button>
                           ))}
                         </div>
                       </div>
                     </div>
                   </div>
                                       
                                     ))
                                   )  : (
                  <div className="col-12 text-center">
                    <p className="text-muted fs-5">
                      No products found in this {type === 'category' ? 'category' : 'subcategory'}.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
    
        <Footer />
      </>
    );
   
};

export default ProductList;