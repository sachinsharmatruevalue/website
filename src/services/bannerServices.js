import requests from "./httpsServices";

const BannerService={

    getbanner: async () => {
        return requests.get(`/api/banner`);
      },
      updatebanner: async (id, body) => {
        return requests.patch(`/api/banner/${id}`, body);
      },
      createbanner: async (body) => {
        console.log(body);
        return requests.post(`/api/banner/`, body);
      },
      deletebanner: async (id) => {
        return requests.delete(`/api/banner/${id}`);
      },

}

export default BannerService