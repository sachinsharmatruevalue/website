// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import CategoryServices from '../../services/categoryServices'
// import SubCategoryServices from "../../services/addSubCategory"
// const AllCategory = () => {

//   const [categories, setCategories] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   const [subCategories, setSubCategories] = useState({});
//   const [activeCategory, setActiveCategory] = useState(null);


//   // Fetch categories
  
//     useEffect(() => {
//       const getCategory = async () => {
//         try {
//           const response = await CategoryServices.getCategory();
//           // console.log("------->",response.data);
//           // return
          
//           setCategories(response.data);
//         } catch (error) {
//           console.error("Failed to fetch users", error);
//         }
//       };
//       getCategory();

//   }, []);


//   const handleCategoryClick = (categoryId) => {
//     setActiveCategory(categoryId);


//     if (!subCategories[categoryId]) {
//        useEffect(() => {
//           const getSubCategory = async (id) => {
//             try {
//               const response = await SubCategoryServices.getSubCategoryByCategory (id);
//               // console.log("------->",response.data);
//               // return
              
//               setSubCategories(response.data);
//             } catch (error) {
//               console.error("Failed to fetch users", error);
//             }
//           };
//           getSubCategory();
    
//       }, []);
//     }
//   };

//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <li className="dropdown position-static">
//       <a href="javascript:void(0)" >All Collection</a>
//       <ul className="mega-menu d-block"style={{
//           display: activeCategory ? "block" : "none",
//           position: "absolute",
//           left: '40em',
//           top: "100%",
//           width: "350px",
//           background: "#fff",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           padding: "10px",
//           borderRadius: "5px",
//           zIndex: 1000,
//           listStyle: "none",
//         }}>
//         <li className="d-flex">
//           <ul className="d-block">
//             {categories.length > 0 ? (
//               categories.map((category, index) => (
//                 <li key={index}>

//                   <Link to={`/category/${category.slug || category._id}`} onClick={() => handleCategoryClick(category._id)}>
//                     {category.name}
//                   </Link>


//                   {activeCategory === category._id && subCategories[category._id] && subCategories[category._id].length > 0 && (
//                     <ul>
//                       {subCategories[category._id].map((subCategory, subIndex) => (
//                         <li key={subIndex}>
//                           <Link to={`/subcategory/${subCategory.slug || subCategory._id||   subCategory.name}}`}>
                         
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))
//             ) : (
//               <li>No categories available</li>
//             )}
//           </ul>
//         </li>
//       </ul>
//     </li>
//   );
// };

// export default AllCategory;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryServices from '../../services/categoryServices';
import SubCategoryServices from "../../services/addSubCategory";
import ProductServices from "../../services/productServices"; // Assuming you have a service to fetch products

const AllCategory = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [products, setProducts] = useState([]);

  // Fetch categories
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await CategoryServices.getCategory();
        setCategories(response.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    getCategory();
  }, []);

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubCategory(null); // Reset active subcategory when a new category is clicked

    if (!subCategories[categoryId]) {
      // Fetch subcategories for the selected category
      const getSubCategory = async () => {
        try {
          const response = await SubCategoryServices.getSubCategoryByCategory(categoryId);
          setSubCategories((prevState) => ({
            ...prevState,
            [categoryId]: response.data,
          }));
        } catch (error) {
          console.error("Failed to fetch subcategories", error);
        }
      };
      getSubCategory();
    }
  };

  // Handle subcategory click
  const handleSubCategoryClick = async (subCategoryId) => {
    setActiveSubCategory(subCategoryId);

    // Fetch products for the selected subcategory
    try {
      const response = await ProductServices.getProductsBySubCategory(subCategoryId);
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  return (
    <li className="dropdown position-static">
      <a href="javascript:void(0)">All Collection</a>
      <ul
        className="mega-menu d-block"
        style={{
          display: activeCategory ? 'block' : 'none',
          position: 'absolute',
          left: '40em',
          top: '100%',
          width: '350px',
          background: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '10px',
          borderRadius: '5px',
          zIndex: 1000,
          listStyle: 'none',
        }}
      >
        <li className="d-flex">
          <ul className="d-block">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={`/category/${category.slug || category._id}`}
                    onClick={() => handleCategoryClick(category._id)}
                  >
                    {category.name}
                  </Link>

                  {activeCategory === category._id && subCategories[category._id] && subCategories[category._id].length > 0 && (
                    <ul>
                      {subCategories[category._id].map((subCategory, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={`/subcategory/${subCategory.slug || subCategory._id}`}
                            onClick={() => handleSubCategoryClick(subCategory._id)}
                          >
                            {subCategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))
            ) : (
              <li>No categories available</li>
            )}
          </ul>
        </li>
      </ul>

      {/* Display products for the selected subcategory */}
      {activeSubCategory && products.length > 0 && (
        <div className="subcategory-products">
          <h3>Products in this subcategory:</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                <Link to={`/product/${product.slug || product._id}`}>
                  <img src={product.image || "/default-product-image.jpg"} alt={product.name} />
                  <p>{product.name}</p>
                  <span>${product.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default AllCategory;












