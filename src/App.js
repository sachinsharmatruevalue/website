import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./component/Auth/Login";
import Dashboard from "./component/viewmodel/Dashboard";
import Banner from "./component/viewmodel/banner";
import Footer from "./component/Common/footer";
import Header from "./component/Common/header";
import AddBanner from "./component/addServices/addBanner";
import Profile from "./component/viewmodel/Profile";
import Notification from "./component/viewmodel/notification";
import AddNotification from "./component/addServices/addnotification";
import Category from "./component/viewmodel/category";
import AddCategory from "./component/addServices/addCategory";
import SubCategory from "./component/viewmodel/subCategory";
import AddSubCategory from "./component/addServices/addSubCategory";
import Brand from "./component/viewmodel/brand";
import AddBrand from "./component/addServices/addBrand";
import Product from "./component/viewmodel/product";
import AddProduct from "./component/addServices/addProduct";
import SignUp from "./component/Auth/signUp";
import TermsAndCondition from "./component/viewmodel/termsandConditons";
import Policy from "./component/viewmodel/policy";
import AboutUs from "./component/viewmodel/aboutUs";
import AddUserAdress from "./component/addServices/addAddress";
import Blog from "./component/viewmodel/blog";
import AddBlog from "./component/addServices/addBlog";
import Order from "./component/viewmodel/order";
import HomeHeader from './forntend/HomeHeader';
import Home from './forntend/Home';
// import AddToCart from "./forntend/Carts/AddToCart";
import AllCategory from './forntend/AllCollectionsCategory/AllCategory'
// import Footer from './forntend/Footer';
// import Blog from '../../src/forntend/Blog';
import Contact from './forntend/contact/Contact';

// Slick -carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// UserInformation Components=>
import UserLogin from './forntend/userInformation/UserLogin';
import UserRegister from './forntend/userInformation/UserRegister';

// Slider
import Slider from './forntend/Slider/Slider';

// Front Category 
import HomeCategory from './forntend/category/HomeCategory';

// Banner
import HomeBanner from './forntend/banner/HomeBanner';
import SaleBanner from './forntend/banner/SaleBanner';

// HomeProduct
import HomeProduct from './forntend/product/HomeProduct';
import TreadingHomeProduct from './forntend/product/TreadingHomeProduct';
import TreadingBanner from './forntend/banner/TreadingBanner';
import SareeBanner from './forntend/banner/SareeBanner';
import CheckOut from './forntend/CheckOut/CheckOut';
import TrackOrder from './forntend/Track/TrackOrder';
import About from './forntend/About/About';
import SaleProduct from './forntend/product/SaleProduct';
import OfferBanner from './forntend/banner/OfferBanner';
import Service from './forntend/Service/Service';
import ProductDetails from "./forntend/productlist/ProductDetails";
import AddToCart from "./forntend/Carts/AddToCart";
import UserProfile from "./forntend/userInformation/UserProfile";
import Blogs from "./forntend/Blog/Blog";
import UserManager from "./component/viewmodel/userManger";
import WishList from "./forntend/CheckOut/WishList";
import Cart from "./forntend/Carts/AddToCart";

const PrivateRoute = ({ children, isAuthenticated, requiredPermission, isAdmin }) => {
  const permissions = JSON.parse(localStorage.getItem("userPermissions")) || {};

  if (isAuthenticated === null) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/admin/login" />;
  if (!isAdmin && !permissions[requiredPermission]) return <Navigate to="/admin/dashboard" />;

  return children;
};
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [role, setRole] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userRole = localStorage.getItem("userRole");
    if (token && userRole) {
      setIsAuthenticated(true);
      setRole(userRole);
      setIsAdmin(userRole === "Admin");
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  // Hide Header and Footer for frontend pages
  const hideAdminLayout = window.location.pathname.startsWith("/admin") || window.location.pathname.startsWith("/dashboard");
  return (
    <Router>
     {isAuthenticated && isAdmin && hideAdminLayout && <Header />}

      <Routes>
        <Route
          path="/admin/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setRole={setRole}
              />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <SignUp setIsAuthenticated={setIsAuthenticated} setRole={setRole} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="dashboard"
              isAdmin={isAdmin}
            >
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/banner"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="banner"
              isAdmin={isAdmin}
            >
              <Banner />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-banner"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="add-banner"
              isAdmin={isAdmin}
            >
              <AddBanner />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="profile"
              isAdmin={isAdmin}
            >
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/notification"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="notification"
              isAdmin={isAdmin}
            >
              <Notification></Notification>
            </PrivateRoute>
          }
        />
        <Route
          path="/add-notification"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="add-notification"
              isAdmin={isAdmin}
            >
              <AddNotification />
            </PrivateRoute>
          }
        />

        <Route
          path="/category"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="category"
              isAdmin={isAdmin}
            >
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-category"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="add-category"
              isAdmin={isAdmin}
            >
              <AddCategory />
            </PrivateRoute>
          }
        />
        <Route
          path="/sub-category"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="sub-category"
              isAdmin={isAdmin}
            >
              <SubCategory />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-sub-category"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="add-sub-category"
              isAdmin={isAdmin}
            >
              <AddSubCategory />
            </PrivateRoute>
          }
        />
        <Route
          path="/brand"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="brand"
              isAdmin={isAdmin}
            >
              <Brand />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-brand"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="add-brand"
              isAdmin={isAdmin}
            >
              <AddBrand />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="product"
              isAdmin={isAdmin}
            >
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-product"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="add-product"
              isAdmin={isAdmin}
            >
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} requiredPermission="pages" isAdmin={isAdmin}>
              <TermsAndCondition />
            </PrivateRoute>
          }
        />
        <Route
          path="/policy"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} requiredPermission="pages" isAdmin={isAdmin}>
              <Policy />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/about-us"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} requiredPermission="pages" isAdmin={isAdmin}>
              <AboutUs />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/user-address"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} requiredPermission="user-address" isAdmin={isAdmin}>
              <UserAddress />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/add-user-address"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} requiredPermission="add-user-address" isAdmin={isAdmin}>
              <AddUserAdress />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/blog"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="blog"
              isAdmin={isAdmin}
            >
              <Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-blog"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="blog"
              isAdmin={isAdmin}
            >
              <AddBlog />
            </PrivateRoute>
          }
        />
         <Route
          path="/user-manger"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="user-manger"
              isAdmin={isAdmin}
            >
              <UserManager />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/cart"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="cart"
              isAdmin={isAdmin}
            >
              <Cart />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/add-cart"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="cart"
              isAdmin={isAdmin}
            >
              <AddCart />
            </PrivateRoute>
          }
        /> */}

        <Route
          path="/order"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="order"
              isAdmin={isAdmin}
            >
              <Order />
            </PrivateRoute>
          }
        />

        {/* <Route
          path="/wishlist"
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              requiredPermission="wishlist"
              isAdmin={isAdmin}
            >
              <WishList />
            </PrivateRoute>
          }
        /> */}




        {/* front Routes */}
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/fornt-category' element={<HomeCategory />} />
        <Route path='/fornt-banner' element={<HomeBanner />} />
        <Route path='/home-product' element={<HomeProduct />} />
        <Route path='/sale-banner' element={<SaleBanner />} />
        <Route path='/trading-product' element={<TreadingHomeProduct />} />
        <Route path='/terading-banner' element={<TreadingBanner />} />
        <Route path='/saree-banner' element={<SareeBanner />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path='/add-to-cart' element={<AddToCart />} />
        <Route path='/track-order' element={<TrackOrder />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/category' element={<Category />} />
        <Route path='/sale-product' element={<SaleProduct />} />
        <Route path='/offer-banner' element={<OfferBanner />} />
        <Route path='/service' element={<Service />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />

        {/* category router */}
        <Route path="/category" element={<Category />} />
        <Route path="/cancel2" element={<Category />} />
        <Route path="/submit2" element={<Category />} />

        {/* // product router */}
        <Route path="/homeheader" element={<HomeHeader />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/producthome" element={<HomeProduct />} />

      </Routes>

    </Router>
  );
}

export default App;
