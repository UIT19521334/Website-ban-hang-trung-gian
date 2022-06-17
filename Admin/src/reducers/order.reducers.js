/* eslint-disable import/no-anonymous-default-export */

import { orderConstants } from "../actions/constants";

const initState = {
  orderList: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case orderConstants.GET_ALL_ORDER_SUCCESS:
      state = {
        ...state,
        orderList: action.payload.orderList,
      };
      break;
    default:
  }
  return state;
};
