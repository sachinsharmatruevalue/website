import React, { useEffect, useState } from "react";
import Pagetitle from "./pagetitle";
import useAsync from "../../Hooks/useAsync";
import AdminServices from "../../services/adminServices";

function Dashboard() {
  const [chartData, setChartData] = useState({
    categories: ["Users", "Products", "Categories", "Subcategories", "Brands", "Active Banners", "Orders" ,"Notification","Blog"], 
    series: []
  });
  
  const { data, error, isLoading } = useAsync(AdminServices.dashboard);
  
  useEffect(() => {
    if (data && data.data) {
      // Extract counts from API response
      const totalUsers = data.data.totalUsers || 0;
      const totalProducts = data.data.totalProducts || 0;
      const totalCategories = data.data.totalCategories || 0;
      const totalSubcategories = data.data.totalSubcategories || 0;
      const totalBrands = data.data.totalBrands || 0;
      const activeBanners= data.data.activeBanners|| 0;
      const totalOrders = data.data.totalOrders || 0;
     
      const totalNotifications = data.data.totalNotifications || 0;
      const totalBlogs = data.data.totalBlogs || 0;
      // Set the chart data
      setChartData({
        categories: ["Users", "Products", "Categories", "Subcategories", "Brands", "Active Banners", "Orders", "Notification","Blog"],
        series: [
          {
            name: "Dashboard Counts",
            data: [totalUsers, totalProducts, totalCategories, totalSubcategories, totalBrands, activeBanners, totalOrders,totalNotifications,totalBlogs],
          }
        ],
      });
    }
  }, [data]);
  return (
    <div className="main_container">
      <div className="right_col" role="main">
        <div className="top-sec-heading">
          <Pagetitle></Pagetitle>
        </div>
        <div className="container-box-inner">
          <div className="row g-4">
            
          <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner" >
                      {<h4>{data?.data?.totalUsers}</h4>}
                      <img src="/admin/img/total-user.svg" alt="" />
                    </div>
                    <p>Total Users</p>
                  </div>
                </div>
              </div>
                  
          <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner">
                      {<h4>{data?.data?.totalCategories}</h4>}
                      <img src="/admin/img/category-img.svg" alt="" />
                    </div>
                    <p>Total Category</p>
                  </div>
                </div>
              </div>
                  
          <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner">
                      {<h4>{data?.data?.totalCategories}</h4>}
                      <img src="/admin/img/total-subcat.svg" alt="" /> 
                    </div>
                    <p>Total SubCategory</p>
                  </div>
                </div>
              </div>
                  
          <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner">
                      {<h4>{data?.data?.totalBrands}</h4>}
                      <img src="/admin/img/total-brand.svg" alt="" />
                    </div>
                    <p>Total Brand</p>
                  </div>
                </div>
              </div>
                  
          <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner">
                      {<h4>{data?.data?.totalProducts }</h4>}
                      <img src="/admin/img/total-product.svg" alt="" />
                    </div>
                    <p>Total Product</p>
                  </div>
                </div>
              </div>
                  
          <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner">
                      {<h4>{data?.data?.activeBanners}</h4>}
                      <img src="/admin/img/total-banner.svg" alt="" />
                    </div>
                    <p>Total Banner Active</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner">
                      {<h4>{data?.data?.totalOrders }</h4>}
                      <img src="/admin/img/total-order.svg" alt="" />
                    </div>
                    <p>Total Order</p>
                  </div>
                </div>
              </div>
             
              <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner">
                    <h4>{data?.data?.totalNotifications}</h4> 
                      <img src="/admin/img/total-notification.svg" alt="" />
                    </div>
                    <p>Total Notification </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="g-box g-box1"  style={{ borderLeft: "4px solid red" }}>
                  <div>
                    <div className="g-box-inner">
                    <h4>{data?.data?.totalBlogs}</h4> 

                      <img src="/admin/img/total-blog.svg" alt="" />
                    </div>
                    <p>Total Blog </p>
                  </div>
                </div>
              </div>
            
          </div>
         
             
            
            
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
