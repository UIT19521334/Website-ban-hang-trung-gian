import axios from "../helpers/axios";

const SaleAPI = {
  getAllSale: async () => {
    const res = await axios.get(`/sale/getAll`);

    return res;
  },
};

export default SaleAPI;
