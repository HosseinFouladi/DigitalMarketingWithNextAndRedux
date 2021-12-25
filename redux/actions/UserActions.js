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