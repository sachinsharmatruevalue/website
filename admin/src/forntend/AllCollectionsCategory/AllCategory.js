import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryServices from '../../services/categoryServices'
const AllCategory = () => {

  const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [subCategories, setSubCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);


  // Fetch categories
  
    useEffect(() => {
      const getCategory = async () => {
        try {
          const response = await CategoryServices.getCategory();
          // console.log("------->",response.data);
          // return
          
          setCategories(response.data);
        } catch (error) {
          console.error("Failed to fetch users", error);
        }
      };
      getCategory();

  }, []);


  const handleCategoryClick = (categoryId) => {
    // setActiveCategory(categoryId);


    // if (!subCategories[categoryId]) {
    //   axios.post('http://192.168.0.26:4000/api/subcategory/getall', { categoryId })
    //     .then((response) => {
    //       console.log(response.data);

    //       if (Array.isArray(response.data.data)) {
    //         setSubCategories((prevSubCategories) => ({
    //           ...prevSubCategories,
    //           [categoryId]: response.data.data,
    //         }));
    //       } else {
    //         console.error('API response for subcategories is not an array.');
    //       }
    //     });
    // }
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <li className="dropdown position-static">
      <a href="javascript:void(0)">All Collection</a>
      <ul className="mega-menu d-block">
        <li className="d-flex">
          <ul className="d-block">
            {categories.length > 0 ? (
              categories.map((category, index) => (
                <li key={index}>

                  <Link to={`/category/${category.slug || category._id}`} onClick={() => handleCategoryClick(category._id)}>
                    {category.name}
                  </Link>


                  {activeCategory === category._id && subCategories[category._id] && subCategories[category._id].length > 0 && (
                    <ul>
                      {subCategories[category._id].map((subCategory, subIndex) => (
                        <li key={subIndex}>
                          <Link to={`/subcategory/${subCategory.slug || subCategory._id||   subCategory.name}}`}>
                         
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
















