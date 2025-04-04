// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SubCategoryServices from "../../services/addSubCategory"
// import CategoryServices from "../../services/categoryServices";
// const AllSubCategory = () => {
//   const [subCategories, setSubCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

 
//     useEffect(() => {
//       const getSubCategory = async (id) => {
//         try {
//           const response = await SubCategoryServices.getSubCategoryByCategory (id);
//           // console.log("------->",response.data);
//           // return
          
//           setSubCategories(response.data);
//         } catch (error) {
//           console.error("Failed to fetch users", error);
//         }
//       };
//       getSubCategory();

//   }, []);



//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             <img
//               src="https://images.unsplash.com/photo-1572177215152-32f247303126?w=50&h=50&fit=crop"
//               alt="Logo"
//               width={30}
//               height={30}
//               className="d-inline-block align-text-top me-2"
//             />
//             Shop Name
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <nav aria-label="breadcrumb" className="ms-3">
//               <ol className="breadcrumb mb-0">
//                 <li className="breadcrumb-item">
//                   <a href="#">Home</a>
//                 </li>
//                 <li className="breadcrumb-item">
//                   <a href="#">Electronics</a>
//                 </li>
//                 <li className="breadcrumb-item active">Sub-Categories</li>
//               </ol>
//             </nav>
//           </div>
//         </div>
//       </nav>

//       <div className="container py-4">
//         <div className="row mb-4">
//           <div className="col-md-6">
//             <h1 className="category-title">Electronics</h1>
//           </div>
//           <div className="col-md-6 d-flex justify-content-md-end align-items-center">
//             <div className="dropdown me-2">
//               <button
//                 className="btn btn-outline-secondary dropdown-toggle"
//                 type="button"
//                 data-bs-toggle="dropdown"
//               >
//                 Sort By
//               </button>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Alphabetical
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Popularity
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Newest
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="dropdown">
//               <button
//                 className="btn btn-outline-secondary dropdown-toggle"
//                 type="button"
//                 data-bs-toggle="dropdown"
//               >
//                 Filter
//               </button>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     In Stock
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     On Sale
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Featured
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="row g-4">
//           {/* Map through subcategories and render cards dynamically */}
//           {subCategories.map((subcategory) => (
//             <div className="col-sm-6 col-lg-4" key={subcategory.id}>
//               <div className="card h-100 subcategory-card">
//                 <img
//                   src={subcategory.image} // Default image if no image is available
//                   className="card-img-top"
//                   alt={subcategory.name}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{subcategory.name}</h5>
//                   <p className="card-text">{subcategory.description}</p>
//                   <span className="badge bg-secondary">{subcategory.itemCount} items</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AllSubCategory;
