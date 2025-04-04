import requests from "./httpsServices";

const AddressServices = {
  getByIdAdress: async (id, body) => {
    return requests.get(`/api/address/${id}`, body);
  },
  getAddress: async () => {
    return requests.get(`/api/address/`);
  },
  updateAddress: async (id, body) => {
    return requests.patch(`/api/address/${id}`, body);
  },
  createAddress: async (body) => {
    console.log(body);
    return requests.post(`/api/address/`, body);
  },
  deleteAddress: async (id) => {
    return requests.delete(`/api/address/${id}`);
  },
};
export default AddressServices