import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import ProductReducer from "../Reducers/ProductReaducer";

const store = createStore(
  ProductReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
