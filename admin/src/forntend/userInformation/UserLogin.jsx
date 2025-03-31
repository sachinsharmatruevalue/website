import React, { useState } from 'react'
import Footer from '../Footer'
import HomeHeader from '../HomeHeader'
import './UserLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';

const UserLogin = () => {

  const [data, setData] = useState(null)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const user = {
    email: email,
    password: password
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // const token=localStorage.setItem('token')
      const response = await axios.post(`http://192.168.0.26:4000/api/user/login`, user
   
    );  
       console.log('Response Data-----:', response);
       navigate('/user-profile')

      setData(response.data.data);

 
      if (response.data.data.success) {
      } else {
        setError('Login failed. Please check your credentials.');
      }

    } catch (err) {
      console.error('Error:', err);
      setError(err.response ? err.response.data : err.message);
    }
  };
 



  return (
    <>
      <HomeHeader />
      <section className="ec-page-content section-space-p">
        <div className="ec-login-wrapper">
          <div className="ec-login-container">
            <div className="ec-login-form">
              <form onSubmit={handleLogin}>
                <span className="ec-login-wrap">
                  <label>Email Address*</label>
                  <input type="text" name="name" placeholder="Enter your email add..." required onChange={(e) => setEmail(e.target.value)} value={email} />
                </span>
                <span className="ec-login-wrap">
                  <label>Password*</label>
                  <input type="password" name="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} value={password} />
                </span>
                <span className="ec-login-wrap ec-login-fp">
                  <label><a href="#">Forgot Password?</a></label>
                </span>
                <span className="ec-login-wrap ec-login-btn">
                  <button className="btn btn-primary" type="submit">Login</button>
                  {/* <ToastContainer /> */}
                  <Link to='/register'><a href="register.html" className="btn btn-secondary">Register</a></Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default UserLogin
