// creare store and combine all reducers here... (memory global of app)
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import ProductReducer from "../reducers/ProductReducer";
// Combine all reducers here...
const rootReducer = combineReducers({
  product: ProductReducer,
  // Add more reducers here...
});

//fetchitems cần có applymiddleware thunk để có thể dispatch 1 function
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
