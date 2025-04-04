import requests from "./httpsServices";

const wishListServices = {
 
  getAllWishList   : async () => {
    return requests.get(`/`);
  },
 
  createbwishList: async (body) => {
    console.log(body);
    return requests.post(`/api/wishlist/:userId/`, body);
  },

};
export default wishListServices;
