import requests from "./httpsServices";
const AddtoCartServices = {
  getAllCart: async () => {
    const res = await requests.get(`/api/cart/`);
    console.log("getAllCart() response:", res); // <== Check this
    return res;
  },
  addToCart: async (body) => {
    
      const response = await requests.post(`/api/cart/`, body);
      return response; // ✅ Make sure you're returning the response!
    },
    removeFromCartItem: async (cartId, itemId) => {
      return requests.delete(`/api/cart/${cartId}/item/${itemId}`);
    }
};
export default AddtoCartServices;