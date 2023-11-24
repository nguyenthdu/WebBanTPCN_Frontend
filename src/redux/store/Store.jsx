// creare store and combine all reducers here... (memory global of app)
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import BrandReducer from "../reducers/BrandReducer";
import CategoryReducer from "../reducers/CategoryReducer";
import ManufacturerReducer from "../reducers/ManufacturerReducer";
import ProductReducer from "../reducers/ProductReducer";
import UserReducer from "../reducers/UserReducer";
// Combine all reducers here...
const rootReducer = combineReducers({
  product: ProductReducer,
  brand: BrandReducer,
  category: CategoryReducer,
  manufacturer: ManufacturerReducer,
  user: UserReducer,
  // Add more reducers here...
});

//fetchitems cần có applymiddleware thunk để có thể dispatch 1 function
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
