import CategoryAPI from "../apis/category";
import { categoryConstants } from "./constants";

const CategoryActions = {
  getAllCategory: () => {
    return async (dispatch) => {
      dispatch({ type: categoryConstants.GET_ALL_CATEGORY_REQUEST });

      const res = await CategoryAPI.getAllCategory();

      if (res.status === 200) {
        const categoryList = res.data;
        dispatch({
          type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
          payload: { categoryList: categoryList.categoryList },
        });
      } else {
        dispatch({
          type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },
};

export default CategoryActions;
