import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
import categoryReducer from "./category.reducers";
import orderReducers from "./order.reducers";
import saleReducers from "./sale.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  orders: orderReducers,
  sales: saleReducers,
});

export default rootReducer;
