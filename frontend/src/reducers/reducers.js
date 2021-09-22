import homeReducer from "./homeApi";
import universityReducer from "./uniApi";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    homeReducer,
    universityReducer
});

export default rootReducer;