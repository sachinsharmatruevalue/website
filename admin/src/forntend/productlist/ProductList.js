



import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import HomeHeader from '../HomeHeader';
import Footer from '../Footer';



export default function ProductList() {
   const [data, setData] = useState([])
   const navigate = useNavigate();
   let location = useLocation();
   const category = location.state._id
   console.log("category",category)
  
   //view api call
   const fetchData = async () => {
      try {

         const apiUrl = `http://localhost:3005/product-list?product_category=${category}`
         const {data} = await axios.get(apiUrl) 
         if (data.success) {
            setData(data.data)
         } else {
            console.log("Error: ", data.message);
         }
      } catch (error) {
         console.log("error fetching users", error);

      }
   }
   useEffect(() => {
      fetchData()
   }, [])

   return (
      <div>
         <HomeHeader />
         <section className="inner_page_head">
            <div className="container_fuild">
               <div className="row">
                  <div className="col-md-12">
                     <div className="full">
                        <h3>All  Products</h3>

                     </div>
                  </div>
               </div>
            </div>
         </section>


         <section className="product_section layout_padding">
            <div className="container">

<div class="row">
               {
                  data.map((value)=>{
                     return(
<div class="col-sm-6 col-md-4 col-lg-4" 
onClick={(e) => {
   navigate("/productdetail", {
     state: {
       lineData: value,
       _id: value._id,
     },
   });
 }}


>
                  <div class="box">
                     <div class="img-box">
                     <img src={value.photo} alt="fg" />
                     </div>
                     <div class="detail-box">
                     <h5>
                           {value.product_name}
                        </h5>
                        <h6>
                        ₹{value.product_price}
                        </h6>
                     </div>
                  </div>
               </div>
                     )
                     })
               }
               
            
            </div>
            </div>
         </section>
         <Footer />
      </div>
   )
}