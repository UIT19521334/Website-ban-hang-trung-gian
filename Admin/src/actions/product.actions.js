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

  addProduct: (form) => {
    return async (dispatch) => {
      dispatch({ type: productConstants.ADD_PRODUCT_REQUEST });

      const res = await ProductAPI.create(form);

      if (res.status === 200) {
        dispatch({
          type: productConstants.ADD_PRODUCT_SUCCESS,
          payload: { product: res.data },
        });
      } else {
        dispatch({
          type: productConstants.ADD_PRODUCT_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },

  editProduct: (form) => {
    return async (dispatch) => {
      dispatch({ type: productConstants.EDIT_PRODUCT_REQUEST });

      const res = await ProductAPI.update(form);

      if (res.status === 200) {
        dispatch({
          type: productConstants.EDIT_PRODUCT_SUCCESS,
          payload: { product: res.data },
        });
      } else {
        dispatch({
          type: productConstants.EDIT_PRODUCT_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },
};

export default ProductActions;
