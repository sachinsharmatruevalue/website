// import React, { useState } from 'react';
// import Footer from '../front/Footer';
// import HomeHeader from '../front/HomeHeader';
// import './UserRegister.css';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import OtpInput from "react-otp-input";

// const UserRegister = () => {
//   // const navigate = useNavigate(); 
//   const [data, setData] = useState(null);
//   const [error, setError] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [password, setPassword] = useState('');
//   const [address, setAddress] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [code, setCode] = useState("");

//   const handleChange = (code) => setCode(code);

//   const userData = {
//     name,
//     email,
//     mobileNo,
//     password,
//     pincode,
//     address,
//     city,
//     state,
//   };


//   // const notify = () => toast("User is register succesfully with us!");
//   const handleSubmit = async (event) => {
//     event.preventDefault();


//     try {
//       const response = await axios.post(`http://192.168.0.13:4000/api/user/register`, userData);
//       console.log("response>>", response);

//       setData(response.data);
//       console.log('Response Data:', response.data);
//     } catch (err) {
//       console.error('Error:', err);
//       setError(err.response ? err.response.data : err.message);
//     }
//     // const navigate = useNavigate();
//   };


//   return (
//     <>
//       <HomeHeader />
//       <section className="ec-page-content section-space-p">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <div className="section-title">
//                 <h2 className="ec-title">Register</h2>
//                 <p className="sub-title mb-3">
//                   Best place to buy and sell digital products
//                 </p>
//               </div>
//             </div>
//             <div className="ec-register-wrapper">
//               <div className="ec-register-container">
//                 <div className="ec-register-form">
//                   <form onSubmit={handleSubmit}>

//                     <span className="ec-register-wrap ec-register-half">
//                       <label>First Name*</label>
//                       <input
//                         type="text"
//                         name="Name"
//                         placeholder="Enter your name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}  // Update state
//                         required
//                       />
//                     </span>
//                     {/* <span className="ec-register-wrap ec-register-half">
//                       <label>Last Name*</label>
//                       <input
//                         type="text"
//                         name="lastname"
//                         placeholder="Enter your last name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}  // Update state
//                         required
//                       />
//                     </span> */}
//                     <span className="ec-register-wrap ec-register-half">
//                       <label>Email*</label>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}  // Update state
//                         required
//                       />
//                     </span>
//                     <span className="ec-register-wrap ec-register-half">
//                       <label>Mobile Number*</label>
//                       <input
//                         type="text"
//                         name="phonenumber"
//                         placeholder="Enter your phone number"
//                         value={mobileNo}
//                         onChange={(e) => setMobileNo(e.target.value)}  // Update state
//                         required
//                       />
//                     </span>
//                     <span className="ec-register-wrap ec-register-half">
//                       <label>Password</label>
//                       <input
//                         type="text"
//                         name="password"
//                         placeholder="Enter your password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                       />
//                     </span>
//                     <span className="ec-register-wrap ec-register-half">
//                       <label>PinCode</label>
//                       <input
//                         type="Number"
//                         name="number"
//                         placeholder="Enter your pincode"
//                         value={pincode}
//                         onChange={(e) => setPincode(e.target.value)}
//                         required
//                       />
//                     </span>
//                     <span className="ec-register-wrap">
//                       <label>Address</label>
//                       <input
//                         type="text"
//                         name="address"
//                         placeholder="Address Line 1"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}  // Update state
//                       />
//                     </span>
//                     <span className="ec-register-wrap ec-register-half">
//                       <label>City*</label>
//                       <input
//                         type="city"
//                         name="city"
//                         placeholder="Enter Your city"
//                         // id="city"
//                         // className="ec-register-select"
//                         value={city}
//                         onChange={(e) => setCity(e.target.value)}  // Update state
//                         required
//                       >
//                       </input>
//                     </span>
//                     {/* <span className="ec-register-wrap ec-register-half">
//                       <label>Role</label>
//                       <input
//                         type="text"
//                         name="role"
//                         placeholder="Role"
//                         value={role}
//                         onChange={(e) => setRole(e.target.value)}  // Update state
//                       />
//                     </span> */}
//                     <span className="ec-register-wrap ec-register-half">
//                       <label>State</label>
//                       <input
//                         type="text"
//                         name="state"
//                         placeholder="state"
//                         value={state}
//                         onChange={(e) => setState(e.target.value)}
//                       />
//                     </span>
//                     {/* <span className="ec-register-wrap ec-register-half">
//                       <label>Country*</label>
//                       <select
//                         name="ec_select_country"
//                         id="ec-select-country"
//                         className="ec-register-select"
//                         value={country}
//                         onChange={(e) => setCountry(e.target.value)}  // Update state
//                         required
//                       >
//                         <option selected disabled>
//                           Country
//                         </option>
//                         <option value="1">Country 1</option>
//                         <option value="2">Country 2</option>
//                         <option value="3">Country 3</option>
//                         <option value="4">Country 4</option>
//                         <option value="5">Country 5</option>
//                       </select>
//                     </span> */}
//                     {/* 
//                     <span className="ec-register-wrap ec-recaptcha">
//                       <span
//                         className="g-recaptcha"
//                         data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
//                         data-callback="verifyRecaptchaCallback"
//                         data-expired-callback="expiredRecaptchaCallback"
//                       />
//                       <input
//                         className="form-control d-none"
//                         data-recaptcha="true"
//                         required
//                         data-error="Please complete the Captcha"
//                       />
//                       <span className="help-block with-errors" />
//                     </span> */}

//                     <span className="ec-register-wrap ec-register-btn">
//                       <button className="btn btn-primary" type="submit">
//                         Register
//                       </button>
//                       <ToastContainer />
//                     </span>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default UserRegister;



import React, { useState } from 'react';
// import Footer from '../Footer';
import HomeHeader from '../HomeHeader';
import './UserRegister.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import OtpInput from "react-otp-input";

const UserRegister = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [code, setCode] = useState(""); 

  const handleChange = (code) => setCode(code);

  const userData = {
    name,
    email,
    mobileNo,
    password,
    pincode,
    address,
    city,
    state,
    otp: code,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://192.168.0.26:4000/api/user/register`, userData);
      console.log("response>>", response);

      setData(response.data);
      console.log('Response Data:', response.data);
    } catch (err) {
      console.error('Error:', err);
      setError(err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
      <HomeHeader />
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-title">Register</h2>
                <p className="sub-title mb-3">
                  Best place to buy and sell digital products
                </p>
              </div>
            </div>
            <div className="ec-register-wrapper">
              <div className="ec-register-container">
                <div className="ec-register-form">
                  <form onSubmit={handleSubmit}>

                    <span className="ec-register-wrap ec-register-half">
                      <label>First Name*</label>
                      <input
                        type="text"
                        name="Name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </span>
                    <span className="ec-register-wrap ec-register-half">
                      <label>Email*</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </span>
                    <span className="ec-register-wrap ec-register-half">
                      <label>Mobile Number*</label>
                      <input
                        type="text"
                        name="phonenumber"
                        placeholder="Enter your phone number"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                        required
                      />
                    </span>
                    <span className="ec-register-wrap ec-register-half">
                      <label>Password</label>
                      <input
                        type="text"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </span>
                    <span className="ec-register-wrap ec-register-half">
                      <label>PinCode</label>
                      <input
                        type="Number"
                        name="number"
                        placeholder="Enter your pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Address Line 1"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </span>
                    <span className="ec-register-wrap ec-register-half">
                      <label>City*</label>
                      <input
                        type="city"
                        name="city"
                        placeholder="Enter Your city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </span>
                    <span className="ec-register-wrap ec-register-half">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </span>

                    {/* OTP Input Field */}
                    {/* <span className="ec-register-wrap">
                      <label>Enter OTP*</label>
                      <OtpInput
                        value={code}
                        onChange={handleChange}
                        numInputs={6}
                        separator={<span style={{ width: "8px" }}></span>}
                        isInputNum={true}
                        shouldAutoFocus={true}
                        inputStyle={{
                          border: "1px solid transparent",
                          borderRadius: "8px",
                          width: "54px",
                          height: "54px",
                          fontSize: "12px",
                          color: "#000",
                          fontWeight: "400",
                          caretColor: "blue"
                        }}
                        focusStyle={{
                          border: "1px solid #CFD3DB",
                          outline: "none"
                        }}
                      />
                    </span> */}

                    <span className="ec-register-wrap ec-register-btn">
                      <button className="btn btn-primary" type="submit">
                        Register
                      </button>
                      <ToastContainer />
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default UserRegister;





















