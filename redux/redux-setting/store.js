import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import { rootReducer } from "./RootReducer"
import { HYDRATE } from "next-redux-wrapper"

const middleware = [thunk]

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    } else {
      return rootReducer(state, action);
    }
  };
 const makeStore = () => createStore(reducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore,{debug:true});