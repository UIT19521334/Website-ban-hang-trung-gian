/* eslint-disable import/no-anonymous-default-export */

import { analyticConstants } from "../actions/constants";

const initState = {
  analyticList: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case analyticConstants.GET_ALL_ANALYTIC_SUCCESS:
      state = {
        ...state,
        analyticList: action.payload.analyticList,
      };
      break;
    default:
  }
  return state;
};
