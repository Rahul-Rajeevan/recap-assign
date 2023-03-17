import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as product} from "./ProductReducer/reducer"
import {reducer as authentication} from "./AuthReducer/reducer"
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    product,
    authentication
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))