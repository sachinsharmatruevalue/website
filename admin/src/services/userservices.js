import requests from "./httpsServices";
import axios from "axios";
const API_BASE = "http://192.168.0.13:4000";
const UserServices = {

  getMyProfile: async (token) => {
  
      const response = await axios.get(`${API_BASE}/api/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ use backticks here
        },
      });
      return response; 
  },
 

  // getMyProfile: async (token) => {
   
  //   console.log("token",token);
  //   return requests.get(`/api/user/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // },
  
  getAllUser:async()=>
  {
    return requests.get(`/api/user/`);
  },
  UpdatedUser:async(id,body)=>
  {
    return requests.patch(`/api/user/${id}`,body);
  },
  deleteuser:async(id)=>
  {
    return requests.delete(`/api/user/usersdelete/${id}`)
  },
  getLogin:async(user)=>
    {
      return requests.post(`/api/user/login`,user);
    },
  

};

export default UserServices;
