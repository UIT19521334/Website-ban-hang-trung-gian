import SaleAPI from "../apis/sale";
import { saleConstants } from "./constants";

const SaleActions = {
  getAllSale: () => {
    return async (dispatch) => {
      dispatch({ type: saleConstants.GET_ALL_SALE_REQUEST });

      const res = await SaleAPI.getAllSale();

      if (res.status === 200) {
        const saleList = res.data;
        dispatch({
          type: saleConstants.GET_ALL_SALE_SUCCESS,
          payload: { saleList: saleList },
        });
      } else {
        dispatch({
          type: saleConstants.GET_ALL_SALE_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },
};

export default SaleActions;
