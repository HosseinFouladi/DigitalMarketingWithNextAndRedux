import { USERTYPES } from "../ActionTypes/Usertypes";

export const setCurrentUser=(user)=>({
    type:USERTYPES.SET_CURRENT_USER,
    payload:user
})

export const addProductToUser=(product)=>({
    type:USERTYPES.ADD_PRODUTC_TO_USER,
    payload:product
})

export const setImage=(image)=>({
    type:USERTYPES.SET_USER_IMAGE,
    payload:image
})

export const setImageUrl=(url)=>({
    type:USERTYPES.SET_IMAGE_URL,
    payload:url
})
export const logout=()=>({
    type:USERTYPES.LOG_OUT
})

export const toggleReservedCount=(product,operator)=>({
    type:USERTYPES.TOGGLE_RESERVED_PRODUCT_COUNT,
    payload:{
        product,
        operator
    }
})

export const deleteProductFromUserCart=(productId)=>({
    type:USERTYPES.DELETE_PRODUCT_FROM_CART,
    payload:productId
})

//saga
export const startUploadingInfo=(user)=>({
    type:USERTYPES.START_UPLOADING_USER_PICTURE,
    payload:user
})
export const successUploadingInfo=(user)=>({
    type:USERTYPES.SUCCESS_UPLOADING_USER_PICTURE,
    payload:user
})
export const failureUploadingInfo=(error)=>({
    type:USERTYPES.FAILURE_UPLOADING_USER_IMAGE,
    payload:error
})