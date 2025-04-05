// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate for programmatic navigation
// import CategoryServices from '../../services/categoryServices';
// import SubCategoryServices from "../../services/addSubCategory";
// import ProductServices from "../../services/productServices";

// const AllCategory = () => {
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [activeSubCategory, setActiveSubCategory] = useState(null);
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate(); 

 
//   useEffect(() => {
//     const getCategory = async () => {
//       try {
//         const response = await CategoryServices.getCategory();
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Failed to fetch categories", error);
//       }
//     };
//     getCategory();
//   }, []);

//   const handleCategoryClick = (categoryId) => {
//     setActiveCategory(categoryId);
//     setActiveSubCategory(null);

//     if (!subCategories[categoryId]) {
    
//       const getSubCategory = async () => {
//         try {
//           const response = await SubCategoryServices.getSubCategoryByCategory(categoryId);
//           setSubCategories((prevState) => ({
//             ...prevState,
//             [categoryId]: response.data,
//           }));
//         } catch (error) {
//           console.error("Failed to fetch subcategories", error);
//         }
//       };
//       getSubCategory();
//     }

    
//     // navigate('/product-list', {
//     //   state: { categoryId } 
//     // });
//   };


//   const handleSubCategoryClick = async (subCategoryId) => {
//     setActiveSubCategory(subCategoryId);

    
//     try {
//       const response = await ProductServices.getProductSubCategory(subCategoryId);
//       setProducts(response.data);

//       navigate('/product-list', {
//         state: { subCategoryId } 
//       });
//     } catch (error) {
//       console.error("Failed to fetch products", error);
//     }
//   };

//   return (
//     <li className="dropdown position-static">
//       <a href="javascript:void(0)">All Collection</a>
//       <ul
//         className="mega-menu d-block"
//         style={{
//           display: activeCategory ? 'block' : 'none',
//           position: 'absolute',
//           left: '40em',
//           top: '100%',
//           width: '350px',
//           background: '#fff',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//           padding: '10px',
//           borderRadius: '5px',
//           zIndex: 1000,
//           listStyle: 'none',
//         }}
//       >
//         <li className="d-flex">
//           <ul className="d-block">
//             {categories.length > 0 ? (
//               categories.map((category, index) => (
//                 <li key={index}>
//                   <Link
//                     to={`/category/${category.slug || category._id}`}
//                     onClick={() => handleCategoryClick(category._id)} 
//                   >
//                     {category.name}
//                   </Link>

//                   {activeCategory === category._id && subCategories[category._id] && subCategories[category._id].length > 0 && (
//                     <ul>
//                       {subCategories[category._id].map((subCategory, subIndex) => (
//                         <li key={subIndex}>
//                           <Link
//                             to={`/subcategory/${subCategory.slug || subCategory._id}`}
//                             onClick={() => handleSubCategoryClick(subCategory._id)} 
//                           >
//                             {subCategory.name}
                            
//                           </Link>
                          
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
              
//               ) )
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
import { Link, useNavigate } from 'react-router-dom';
import CategoryServices from '../../services/categoryServices';
import SubCategoryServices from "../../services/addSubCategory";
import ProductServices from "../../services/productServices";

const AllCategory = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate(); 

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

  const handleCategoryClick = async (categoryId, categorySlug) => {
    try {
      // Navigate to product list with category ID
      navigate(`/product-list/category/${categorySlug || categoryId}`, {
        state: { categoryId }
      });
      
      // Optional: Fetch subcategories (if you still want to show them in dropdown)
      const response = await SubCategoryServices.getSubCategoryByCategory(categoryId);
      setSubCategories((prevState) => ({
        ...prevState,
        [categoryId]: response.data,
      }));
      setActiveCategory(categoryId);
    } catch (error) {
      console.error("Failed to fetch subcategories", error);
    }
  };

  const handleSubCategoryClick = (subCategoryId, subCategorySlug) => {
    // Navigate to product list with subcategory ID
    navigate(`/product-list/subcategory/${subCategorySlug || subCategoryId}`, {
      state: { subCategoryId }
    });
  };
  const encodeId = (id) => {
    return btoa(id).replace(/\+/g, "-").replace(/\//g, "_");
  };

  return (
    <li className="dropdown position-static">
      <a href="javascript:void(0)">All Collection</a>
      <ul
        className="mega-menu d-block"
        style={{
          display: activeCategory ? "block" : "none",
          position: "absolute",
          left: '50%',
          top: "100%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "350px",
          background: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "10px",
          borderRadius: "5px",
          zIndex: 1000,
          listStyle: "none",
        }}>
        <li className="d-flex">
          <ul className="d-block">
            {categories.length > 0 ? (
              categories.map((category) => (
                <li key={category._id}>
                  {/* Encoded ID link */}
                  <Link
                    to={`/product-list/category/${encodeId(category._id)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category._id, category.slug);
                    }}
                  >
                    {category.name}
                  </Link>

                  {activeCategory === category._id && subCategories[category._id] && (
                    <ul>
                      {subCategories[category._id].map((subCategory) => (
                        <li key={subCategory._id}>
                          <Link
                            to={`/product-list/subcategory/${subCategory.slug || subCategory._id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubCategoryClick(subCategory._id, subCategory.slug);
                            }}
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
    </li>
  );
};

export default AllCategory;