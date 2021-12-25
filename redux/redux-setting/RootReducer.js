import { combineReducers } from "redux";
import { ProductReducer } from "../reducers/ProductReducer";
import { UserReducer } from "../reducers/UserReducer";

export const rootReducer=combineReducers(
   {
    user:UserReducer,
    product:ProductReducer
   }

)