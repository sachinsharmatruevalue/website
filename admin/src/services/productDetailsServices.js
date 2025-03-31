import requests from "./httpsServices";

const ProductDetailsServices = {
  updateproduct: async (id, body) => {
    return requests.patch(`/api/productdetails/${id}`, body);
  },
  getAll: async () => {
    return requests.get(`/api/productdetails/`);
  },
  
  createproductDetails: async (body) => {
    return requests.post(`/api/productdetails/`, body);
  },
  
  
  getById:async(id,body)=>{
    return requests.get(`/api/productdetails/${id}`,body)
  }
  
};

export default ProductDetailsServices;
