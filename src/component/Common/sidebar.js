import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// import FaBeer from "react-icons/lib/fa/beer";

const SideBar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [permissions, setPermissions] = useState({});
  const role = localStorage.getItem("userRole");

  useEffect(() => {
    const storedPermissions =
      JSON.parse(localStorage.getItem("userPermissions")) || {};
    setPermissions(storedPermissions);
  }, []);

  const handleToggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((prevState) => !prevState);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
      document.body.classList.remove("sidebar-closed");
    } else {
      document.body.classList.add("sidebar-closed");
      document.body.classList.remove("sidebar-open");
    }
  }, [isOpen]);

  const menuItems = [
    { name: "Dashboard", key: "dashboard", img: "img/dashboard.svg" },
    {
      name: "User Manger ",
      key: "user-manger",
      path: "/user-manger",
      img: "/img/user-manager-img.png",
    
    },
    {
      name: "App Banner",
      key: "banner",
      path: "/banner",
      img: "/admin/img/banner.svg",
    },
   
    {
      name: "Notification",
      key: "notification",
      path: "/notification",
      img: "/admin/img/notification.svg",
    },
    {
      name: "Product",
      key: "product",
      img: "/admin/img/cottage.svg",
      subItems: [
        { name: "Category", key: "category", path: "/category" },
        { name: "SubCategory", key: "sub-category", path: "/sub-category" }, 
        { name: "Brand", key: "brand", path: "/brand" }, 
        { name: "Product", key: "product-item", path: "/product" }, 
      ],
    },
    {
      name: "Settings",
      key: "settings",
      path: "/settings",
      img: "/admin/img/setting.svg",
      subItems: [
        { name: "Profile", key: "profile", path: "/profile" },
      ],
    },
    {
      name: "Pages",
      key: "pages",
      path: "/pages",
      img: "/admin/img/pages.svg",
      subItems: [
        { name: "Policy", key: "policy", path: "/policy" },
        { name: "AboutUs", key: "about-us", path: "/about-us" },
        { name: "Term & Conditions", key: "terms-and-conditions", path: "/terms-and-conditions" },
      ],
    },

    {
      name: "Blog",
      key: "blog",
      path: "/blog",
      img: "/admin/img/blog.svg",
    
    },

    {
      name: "Order",
      key: "order",
      path: "/order",
      img: "/admin/img/order.svg",
    
    },
   

  ];

  const renderMenuItem = (name, key, img, subItems) => {
    if (role === "Admin" || permissions[key]) {
      return (
        <li key={key} className="sidebar-item">
          {subItems ? (
            <>
              <a
                onClick={() => handleToggleSubMenu(key)}
                style={{ cursor: "pointer" }}
              >
                <img src={img} alt={name} className="sidebar-icon" />
                {isOpen && <span className="sidebar-text">{name}</span>}
              </a>
              {openSubMenu === key && isOpen && (
                <ul
                  className="submenu"
                  style={{
                    listStyleType: "none",
                    marginLeft: "20px",
                    borderLeft: "4px solid #23334A",
                  }}
                >
                  {subItems.map((subItem) => (
                    <li key={subItem.key}>
                      <NavLink to={subItem.path} className="sub-link">
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <NavLink to={`/${key}`} className="sidebar-link">
                          <img 
              src={img} 
              alt={name} 
              className="sidebar-icon" 
              style={{ 
                width: "30px", 
                height: "40px", 
            
              
              }} 
            />
              {isOpen && <span className="sidebar-text">{name}</span>}
            </NavLink>
          )}
        </li>
      );
    }
    return null;
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          className="sidebar"
          style={{ width: isOpen ? "325px" : "100px" }}
        >
          <div className="toggle">
            <button className="btn toggle-btn" onClick={toggle}>
              <img src="img/arrow-1.svg" alt="Toggle" />
            </button>
          </div>
          <ul className="sidebar-menu">
            {menuItems.map((item) =>
              renderMenuItem(item.name, item.key, item.img, item.subItems)
            )}
          </ul>
          
        </motion.div>
      </div>
    </>
  );
};

export default SideBar;
