import ProductAPI from "../apis/product";
import { productConstants } from "./constants";

const ProductActions = {
  getAllProduct: () => {
    return async (dispatch) => {
      dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });

      const res = await ProductAPI.getAllProduct();

      if (res.status === 200) {
        const productList = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCT_SUCCESS,
          payload: { productList: productList },
        });
      } else {
        dispatch({
          type: productConstants.GET_ALL_PRODUCT_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },
};

export default ProductActions;
