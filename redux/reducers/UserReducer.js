
import { USERTYPES } from "../ActionTypes/Usertypes";
import {HYDRATE} from 'next-redux-wrapper';

const Initial_User={
    currentUser:{
        products:[],
        image:'',
        imageUrl:null
    }
    ,
    users:[]
}

export const UserReducer=(state=Initial_User,action)=>{

    switch(action.type){
        case HYDRATE:
            const stateDiff = (state, action.payload);
            const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith('X'); // or any other criteria
            return {
                ...state,
                ...action.payload.UserReducer,
                  //page: wasBumpedOnClient ? state.page : action.payload.page, // keep existing state or use hydrated
            };
        case USERTYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser:{...action.payload}
            }
            case USERTYPES.ADD_PRODUTC_TO_USER:
                return{
                    ...state,
                    currentUser:{...state.currentUser,products:[...state.currentUser.products,action.payload]}
                }
                case USERTYPES.SET_USER_IMAGE:
                    return{
                        ...state,
                        currentUser:{...state.currentUser,image:action.payload}
                    }
                    case USERTYPES.SET_IMAGE_URL:
                        return{
                            ...state,
                            currentUser:{...state.currentUser,imageUrl:action.payload}
                        }
                        case USERTYPES.LOG_OUT :
                            return{
                                ...state,
                                currentUser:{...state.currentUser,products:[],imageUrl:null,image:''}
                            }
                
        default:
            return state;
    }
}