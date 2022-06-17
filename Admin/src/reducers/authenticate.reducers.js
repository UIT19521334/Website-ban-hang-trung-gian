/* eslint-disable import/no-anonymous-default-export */

import { authenticateConstants } from "../actions/constants";

const initState = {
  authenticateList: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case authenticateConstants.GET_ALL_AUTHENTICATE_SUCCESS:
      state = {
        ...state,
        authenticateList: action.payload.authenticateList,
      };
      break;
    default:
  }
  return state;
};
