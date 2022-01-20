import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { rootReducers } from "./RootReducer";
import { HYDRATE } from "next-redux-wrapper";
import createSagaMiddleware from "@redux-saga/core";
import { RootSaga } from "./RootSaga";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";
/*const sagaMiddleware=createSagaMiddleware();
const middleware = [thunk,sagaMiddleware]

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, 
        ...action.payload,
      };
      return nextState;
    } else {
      return rootReducers(state, action);
    }
  };
  const persistConfig={
    key:'root',
    storage,
    whitelist:['product','user']
 }
  export const makeStore = () => {

    const Store = createStore(
      persistReducer(persistConfig,reducer),
      applyMiddleware(...middleware)
    );
   // use the same saga middleware that you have enhanced your store with
   sagaMiddleware.run(RootSaga);
    return Store;
}*/
//export const makeStore = () => createStore(reducer, compose(applyMiddleware(...middleware)))

//export const wrapper = createWrapper(makeStore,{debug:true});
//export const persistore=persistStore(makeStore());
/*export const STORE= () => {
  let persistor=persistStore(Store);
  return { Store:wrapper, persistor }
}*/

// BINDING MIDDLEWARE
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducers(state, action);
  }
};
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
const sagaMiddleware = createSagaMiddleware();
const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(
      reducer,
      bindMiddleware([thunkMiddleware, sagaMiddleware])
    );
  } else {
    const { persistStore, persistReducer } = require("redux-persist");

    const persistConfig = {
      key: "nextjs",
      whitelist: ["user", "product"],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, reducer);

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware, sagaMiddleware])
    );

    store.__persistor = persistStore(store);
    sagaMiddleware.run(RootSaga);
    return store;
  }
};

export const wrapper = createWrapper(makeStore);
