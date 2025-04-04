import requests from "./httpsServices";

const HomesliderServices = {
  updateBanner: async (id, body) => {
    return requests.patch(`/api/banner/${id}`, body);
  },
  getBanner: async () => {
    return requests.get(`/api/banner/`);
  },
  
  createBanner: async (body) => {
    return requests.post(`/api/banner/`, body);
  },
  deleteBanner: async (id) => {
    return requests.delete(`/api/banner/${id}`);
  },
};

export default HomesliderServices;
