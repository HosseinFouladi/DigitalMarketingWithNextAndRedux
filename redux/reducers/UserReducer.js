import { USERTYPES } from "../ActionTypes/Usertypes";
import { HYDRATE } from "next-redux-wrapper";
import {
  addToCart,
  deleteProductFromCart,
  setReservedCount,
} from "../../utilities/UserHelper";

const Initial_User = {
  currentUser: {
    products: [],
    image: "",
    imageUrl: null,
  },
  userLoading: false,
  errorUpload: null,
  users: [],
};

export const UserReducer = (state = Initial_User, action) => {
  switch (action.type) {
    case HYDRATE:
      const stateDiff = (state, action.payload);
      const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith("X"); // or any other criteria
      return {
        ...state,
        ...action.payload.UserReducer,
      };
    case USERTYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: { ...state.currentUser, information: action.payload },
      };
    case USERTYPES.ADD_PRODUTC_TO_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          products: addToCart(state.currentUser.products, action.payload),
        },
      };
    case USERTYPES.SET_USER_IMAGE:
      return {
        ...state,
        currentUser: { ...state.currentUser, image: action.payload },
      };
    case USERTYPES.SET_IMAGE_URL:
      return {
        ...state,
        currentUser: { ...state.currentUser, imageUrl: action.payload },
      };
    case USERTYPES.LOG_OUT:
      return {
        ...state,
        currentUser: { products: [], imageUrl: null, image: "" },
      };
    case USERTYPES.TOGGLE_RESERVED_PRODUCT_COUNT:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          products: setReservedCount(
            state.currentUser.products,
            action.payload.product,
            action.payload.operator
          ),
        },
      };
    case USERTYPES.DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          products: deleteProductFromCart(
            state.currentUser.products,
            action.payload
          ),
        },
      };
    case USERTYPES.START_UPLOADING_USER_PICTURE:
      return {
        ...state,
        userLoading: true,
        errorUpload: null,
      };
    case USERTYPES.SUCCESS_UPLOADING_USER_PICTURE:
      return {
        ...state,
        userLoading: false,
        currentUser: { ...state.currentUser, ...action.payload },
      };
    case USERTYPES.FAILURE_UPLOADING_USER_IMAGE:
      return {
        ...state,
        userLoading: false,
        errorUpload: action.payload,
      };

    default:
      return state;
  }
};
