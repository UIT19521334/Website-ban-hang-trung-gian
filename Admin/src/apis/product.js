import axios from "../helpers/axios";

const ProductAPI = {
  getAllProduct: async () => {
    const res = await axios.get(`/product/getAll`);

    return res;
  },
};

export default ProductAPI;
