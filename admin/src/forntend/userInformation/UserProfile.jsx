import React, { useEffect, useState } from "react";
import HomeHeader from "../HomeHeader";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import UserServices from "../../services/userservices";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logout Successfully");
    localStorage.clear();
    navigate("/");
  };


  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserServices.getMyProfile(token);
      console.log("Full Axios Response:", response);
  
      if (response.data?.status && response.data?.data) {
        setUser(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
      } else {
        console.error("Profile fetch failed:", response.data?.message || "Unknown error");
      }
    } catch (error) {
      console.error("Failed to fetch user profile", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("user");
        fetchUserProfile(); // Try to fetch fresh data
      }
    } else {
      fetchUserProfile();
    }
  }, []);
  const [editUser, setEditUser] = useState({
    name: "",
    email: "",
    mobileNo: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await UserServices.UpdatedUser(user._id, editUser); // Pass only ID, not whole user object
      if (response.status) {
        alert("Profile updated successfully");
        setUser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Update error", error);
      alert("An error occurred while updating profile");
    }
  };

  return (
    <>
      <HomeHeader />
      <section className="ec-page-content ec-vendor-uploads ec-user-account section-space-p">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="ec-shop-leftside ec-vendor-sidebar col-lg-3 col-md-12">
              <div className="ec-sidebar-wrap ec-border-box">
                <div className="ec-sidebar-block">
                  <div className="ec-vendor-block">
                    <div className="ec-vendor-block-items">
                      <ul>
                        <li><Link to="/user-profile">User Profile</Link></li>
                        <li><Link to="/wishlist">Wishlist</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/track-order">Track Order</Link></li>
                        <li><Link to="/user-invoice">Invoice</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="ec-shop-rightside col-lg-9 col-md-12">
              <div className="ec-vendor-dashboard-card ec-vendor-setting-card">
                <div className="ec-vendor-card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="ec-vendor-block-profile">
                        <div className="ec-vendor-block-img space-bottom-30">
                          <div className="ec-vendor-block-bg">
                          <button
                                className="btn btn-lg btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_modal"
                                onClick={() => user && setEditUser(user)}
                              >
                                Edit Detail
                              </button>
                          </div>
                          <div className="ec-vendor-block-detail">
                            <img className="v-img" src="#" alt="User" />
                            <h5 className="name">{user?.name || "Loading..."}</h5>
                            <p>({user?.userType || "User"})</p>
                          </div>
                          <p>Hello <span>{user?.name || "Guest"}!</span></p>
                          <p>From your account, you can easily view and track orders. Manage your account information, address, and order history.</p>
                        </div>

                        <h5>Account Information</h5>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="ec-vendor-detail-block space-bottom-30">
                              <h6>Email Address</h6>
                              <ul><li><strong>Email: </strong>{user?.email || "Loading..."}</li></ul>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="ec-vendor-detail-block space-bottom-30">
                              <h6>Contact Number</h6>
                              <ul><li><strong>Phone: </strong>{user?.mobileNo || "Loading..."}</li></ul>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="ec-vendor-detail-block">
                              <h6>Address</h6>
                              <ul>
                                <li>
                                  <strong>Home: </strong>
                                  {user?.address && user?.city && user?.state && user?.pincode
                                    ? `${user.address}, ${user.city}, ${user.state} - ${user.pincode}`
                                    : "Loading..."}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-3">
                          <button className="btn btn-danger" onClick={handleLogout}>
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="modal fade" id="edit_modal" tabIndex="-1" aria-labelledby="edit_modalLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className="modal-content " >
      <div className="modal-header">
        <h5 className="modal-title" id="edit_modalLabel">Edit Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form id="editUserForm" onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={editUser.name} onChange={e => setEditUser({ ...editUser, name: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={editUser.email} onChange={e => setEditUser({ ...editUser, email: e.target.value })}  />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" value={editUser.mobileNo} onChange={e => setEditUser({ ...editUser, mobileNo: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" value={editUser.address} onChange={e => setEditUser({ ...editUser, address: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input type="text" className="form-control" value={editUser.city} onChange={e => setEditUser({ ...editUser, city: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">State</label>
            <input type="text" className="form-control" value={editUser.state} onChange={e => setEditUser({ ...editUser, state: e.target.value })} />
          </div>
          <div className="mb-3">
            <label className="form-label">Pincode</label>
            <input type="text" className="form-control" value={editUser.pincode} onChange={e => setEditUser({ ...editUser, pincode: e.target.value })} />
          </div>
          <button type="submit" className="btn btn-success">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
</div>
      <Footer />
    </>
  );
};

export default UserProfile;
