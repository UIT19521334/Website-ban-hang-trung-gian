import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
import categoryReducer from "./category.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
});

export default rootReducer;
