import requests from "./httpsServices";

const HomesliderServices = {
  updateBanner: async (id, body) => {
    return requests.patch(`/api/ban/${id}`, body);
  },
  getBanner: async () => {
    return requests.get(`/api/ban/`);
  },
  
  createBanner: async (body) => {
    return requests.post(`/api/ban/`, body);
  },
  deleteBanner: async (id) => {
    return requests.delete(`/api/ban/${id}`);
  },
};

export default HomesliderServices;
