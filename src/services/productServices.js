import requests from "./httpsServices";

const Productservices = {
  updateproduct: async (id, body) => {
    return requests.patch(`/api/product/${id}`, body);
  },
  getproduct: async () => {
    return requests.get(`/api/product/`);
  },
  
  createproduct: async (body) => {
    return requests.post(`/api/product/`, body);
  },
  deleteproduct: async (id) => {
    return requests.delete(`/api/product/${id}`);
  },
  deleteImage: async (imagePath, productId) => {
    console.log("Sending Data:", { imagePath, productId }); // Debugging
  
    return requests.delete('/api/product/', { 
      data: { imagePath, productId } 
    });
  },

  productSerach:async()=>{
    return requests.post(`/api/product/prdocut-serach`);
  }


  
};

export default Productservices;
