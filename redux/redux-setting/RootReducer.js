import { combineReducers } from "redux";
import { ProductReducer } from "../reducers/ProductReducer";
import { UserReducer } from "../reducers/UserReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product"],
};
export const rootReducers = combineReducers({
  user: UserReducer,
  product: ProductReducer,
});
export default persistReducer(persistConfig, rootReducers);
