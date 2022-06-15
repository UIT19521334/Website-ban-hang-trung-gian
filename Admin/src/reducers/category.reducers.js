/* eslint-disable import/no-anonymous-default-export */

import { categoryConstants } from "../actions/constants";

const initState = {
  categoryList: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
      state = {
        ...state,
        categoryList: action.payload.categoryList,
      };
      break;
    default:
  }
  return state;
};
