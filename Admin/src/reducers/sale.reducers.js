/* eslint-disable import/no-anonymous-default-export */

import { saleConstants } from "../actions/constants";

const initState = {
  saleList: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case saleConstants.GET_ALL_SALE_SUCCESS:
      state = {
        ...state,
        saleList: action.payload.saleList,
      };
      break;
    default:
  }
  return state;
};
