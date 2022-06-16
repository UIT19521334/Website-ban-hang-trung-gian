/* eslint-disable import/no-anonymous-default-export */

import { productConstants } from "../actions/constants";

const initState = {
  productList: [],
  loading: false,
  error: null,
};

const rebuildAddProduct = (products, product) => {
  let myProducts = [];
  for (let p of products) {
    myProducts.push(p);
  }
  myProducts.push(product);
  return myProducts;
};

const rebuildEditProduct = (products, product) => {
  let myProducts = [];
  for (let p of products) {
    myProducts.push(p._id === product._id ? product : p);
  }

  return myProducts;
};

export default (state = initState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        productList: action.payload.productList,
        loading: false,
      };
      break;
    case productConstants.GET_ALL_PRODUCT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case productConstants.ADD_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.ADD_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: rebuildAddProduct(state.products, action.payload.product),
        loading: false,
      };
      break;
    case productConstants.ADD_PRODUCT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case productConstants.EDIT_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.EDIT_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: rebuildEditProduct(state.products, action.payload.product),
        loading: false,
      };
      break;
    case productConstants.EDIT_PRODUCT_FAILURE:
      state = {
        ...initState,
      };
      break;
    default:
  }
  return state;
};
