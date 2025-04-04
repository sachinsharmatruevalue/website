import requests from "./httpsServices";

const OrderServices = {
  updateOrder: async (id, body) => {
    return requests.patch(`/api/order/${id}`, body);
  },
  getOrders: async () => {
    return requests.get(`/api/order/`);
  },
  
  createNotification: async (body) => {
    return requests.post(`/api/order/`, body);
  },
  deleteOrder: async (id) => {
    return requests.delete(`/api/order/${id}`);
  },
};

export default OrderServices;
