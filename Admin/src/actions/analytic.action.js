import AnalyticAPI from "../apis/analytic";
import { analyticConstants } from "./constants";

const AnalyticActions = {
  getAll: () => {
    return async (dispatch) => {
      dispatch({ type: analyticConstants.GET_ALL_ANALYTIC_REQUEST });

      const res = await AnalyticAPI.getAll();

      if (res.status === 200) {
        const analyticList = res.data;
        dispatch({
          type: analyticConstants.GET_ALL_ANALYTIC_SUCCESS,
          payload: { analyticList: analyticList },
        });
      } else {
        dispatch({
          type: analyticConstants.GET_ALL_ANALYTIC_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },
};

export default AnalyticActions;
