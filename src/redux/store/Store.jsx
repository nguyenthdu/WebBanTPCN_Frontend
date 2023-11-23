// creare store and combine all reducers here... (memory global of app)
import { combineReducers, createStore } from "redux";
import ProductReducer from "../reducers/ProductReducer";
// Combine all reducers here...
const rootReducer = combineReducers({
  product: ProductReducer,
  // Add more reducers here...
});

const store = createStore(rootReducer);

export default store;
