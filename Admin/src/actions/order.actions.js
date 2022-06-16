import OrderAPI from "../apis/order";
import { orderConstants } from "./constants";

const OrderActions = {
  getAllOrder: () => {
    return async (dispatch) => {
      dispatch({ type: orderConstants.GET_ALL_ORDER_REQUEST });

      const res = await OrderAPI.getAllOrder();

      if (res.status === 200) {
        const orderList = res.data;
        dispatch({
          type: orderConstants.GET_ALL_ORDER_SUCCESS,
          payload: { orderList: orderList },
        });
      } else {
        dispatch({
          type: orderConstants.GET_ALL_ORDER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },
};

export default OrderActions;
