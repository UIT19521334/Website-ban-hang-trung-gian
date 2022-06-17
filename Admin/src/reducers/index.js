import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import productReducer from "./product.reducer";
import userReducer from "./user.reducer";
import categoryReducer from "./category.reducers";
import orderReducers from "./order.reducers";
import saleReducers from "./sale.reducers";
import authenticateReducers from "./authenticate.reducers";
import analyticReducers from "./analytic.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  orders: orderReducers,
  sales: saleReducers,
  authenticate: authenticateReducers,
  analytic: analyticReducers,
});

export default rootReducer;
