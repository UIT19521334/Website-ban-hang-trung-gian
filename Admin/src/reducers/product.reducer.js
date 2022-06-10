/* eslint-disable import/no-anonymous-default-export */

import { productConstants } from "../actions/constants";

const initState = {
  productList: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        productList: action.payload.productList,
      };
      break;
    default:
  }
  return state;
};
