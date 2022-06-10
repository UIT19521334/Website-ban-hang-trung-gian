import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
});

export default rootReducer;
