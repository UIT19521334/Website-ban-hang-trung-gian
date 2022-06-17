import AuthenticateAPI from "../apis/authenticate";
import { authenticateConstants } from "./constants";

const AuthenticateActions = {
  getAllAuthenticate: () => {
    return async (dispatch) => {
      dispatch({ type: authenticateConstants.GET_ALL_AUTHENTICATE_REQUEST });

      const res = await AuthenticateAPI.getAllAuthenticate();

      if (res.status === 200) {
        const authenticateList = res.data;
        dispatch({
          type: authenticateConstants.GET_ALL_AUTHENTICATE_SUCCESS,
          payload: { authenticateList: authenticateList },
        });
      } else {
        dispatch({
          type: authenticateConstants.GET_ALL_AUTHENTICATE_FAILURE,
          payload: { error: res.data.error },
        });
      }
    };
  },
};

export default AuthenticateActions;
