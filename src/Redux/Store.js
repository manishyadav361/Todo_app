import { createStore } from "redux";
import todoReducer from "../Redux/Reducers.js";
const store = createStore(todoReducer);

export default store;
