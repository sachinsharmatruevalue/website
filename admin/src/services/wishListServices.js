import requests from "./httpsServices";
const wishListServices = {
 
  getAllWishList   : async () => {
    return requests.get(`/api/wishlist/`);
  },
 
  createbwishList: async (body) => {
    console.log(body);
    return requests.post(`/api/wishlist/:userId/`, body);
  },

  addToWishlist:async(userId, productId)=>{
    return requests.post(`/api/wishlist/`,{userId,productId});
  },

  removeFromWishlist:async(userId, productId)=>{
    return requests.delete(`/api/wishlist/`,{userId,productId})
  },

  wishlistCount:async(userId)=>{
    return requests.get(`/api/wishlist/`,{userId })
  }

};
export default wishListServices;