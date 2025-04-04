import requests from "./httpsServices";

const UserServices = {

  getMyProfile : async () =>{
    return requests.get(`/api/user/profile`);
},
  getAllUser:async()=>
  {
    return requests.get(`/api/user/`);
  },
  UpdatedUser:async(id,body)=>
  {
    return requests.patch(`/api/user/updatedata/${id}`,body);
  },
  deleteuser:async(id)=>
  {
    return requests.delete(`/api/user/usersdelete/${id}`)
  }

};

export default UserServices;
