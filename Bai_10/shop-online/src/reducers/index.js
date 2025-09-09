import { combineReducers } from "redux"
import cartReducer from "./cart";

const allReducer = combineReducers ({
    cartReducer,
})
export default allReducer;