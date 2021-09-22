import homeReducer from "./homeApi";
import universityReducer from "./uniApi";
import postalReducer from "./postalApi";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    homeReducer,
    universityReducer,
    postalReducer
});

export default rootReducer;