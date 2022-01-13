import { addLike, addNewCategory, addNewProduct, decraseProducrCount, deleteData, deleteProduct, editData, editProduct, findCategory, findData, findProduct, getRelatedProducts, searchProducts } from "../../utilities/ProductHelper";
import { PRODUCT_TYPES } from "../ActionTypes/ProductTypes";
import { HYDRATE } from "next-redux-wrapper"
import { USERTYPES } from "../ActionTypes/Usertypes";

const Initial_Product={
    products:[],    
    categories:[],
    currentCategory:{},
    currentProduct:{},
    relatedProducts:[],
    searchedProducts:[],
    addLoading:false,
    addErrorMessage:null,
    editLoading:false,
    editErrorMessage:null,
    addLoadingProduct:false,
    addErrorMessageProduct:null,
    editLoadingProduct:false,
    editErrorMessageProduct:null,
}

export const ProductReducer=(state=Initial_Product,action)=>{

    switch(action.type){
        case HYDRATE:
            const stateDiff = (state, action.payload);
            const wasBumpedOnClient = stateDiff?.page?.[0]?.endsWith('X'); // or any other criteria
            return {
                ...state,
                ...action.payload.ProductReducer,
            };
        case PRODUCT_TYPES.INSERT_ALL_CATEGORY:
            return{
                ...state,
                categories:action.payload
            }
            case PRODUCT_TYPES.ADD_CATEGORY:
                return{
                    ...state,
                    categories:addNewCategory(state.categories,action.payload)
                }
                case PRODUCT_TYPES.DELETE_CATEGORY:
                    return{
                        ...state,
                        categories:deleteData(state.categories,action.payload)
                    }
                    case PRODUCT_TYPES.FIND_CATEGORY:
                        return{
                            ...state,
                            currentCategory:findCategory(state.categories,action.payload)
                        }
                        case PRODUCT_TYPES.EDIT_CATEGORY:
                            return{
                                ...state,
                                categories:editData(state.categories,action.payload)
                            }
                            case PRODUCT_TYPES.INSERT_ALL_PRODUCTS:
                                return{
                                    ...state,
                                    products:action.payload
                                }
                                case PRODUCT_TYPES.ADD_PRODUCTS:
                                    return{
                                        ...state,
                                        products:[...state.products,action.payload]
                                    }
                                    case PRODUCT_TYPES.DELETE_PRODUCT:
                                        return{
                                            ...state,
                                            products:deleteProduct(state.products,action.payload)
                                        }
                                        case PRODUCT_TYPES.FIND_PRODUCT:
                                            return{
                                                ...state,
                                                currentProduct:findProduct(state.products,action.payload)
                                            }
                                            case PRODUCT_TYPES.EDIT_PRODUCT:
                                                return{
                                                    ...state,
                                                    products:editData(state.products,currentProduct,action.payload)
                                                }
                                                case PRODUCT_TYPES.GET_RELATED_PRODUCTS_FOR_CATEGORY:
                                                    return{
                                                        ...state,
                                                        relatedProducts:[...getRelatedProducts(state.products,action.payload)]
                                                    }
                                                    case PRODUCT_TYPES.SEARCH_PRODUCTS:
                                                        return{
                                                            ...state,
                                                            searchedProducts:searchProducts(state.products,action.payload)
                                                        }
                                                        case PRODUCT_TYPES.ADD_LIKE_COUNT:
                                                            return{
                                                                ...state,
                                                                products:addLike(state.currentProduct,state.products,action.payload),
                                                                currentProduct:{...state.currentProduct,likes:action.payload=='increment'? state.currentProduct.likes+1:state.currentProduct.likes-1,isLiked:!(state.currentProduct.isLiked)}
                                                            }
                                                            case PRODUCT_TYPES.DECREASE_PRODUCT_COUNT:
                                                                return{
                                                                    ...state,
                                                                    products:decraseProducrCount(state.currentProduct,state.products),
                                                                    currentProduct:{...state.currentProduct,count:state.currentProduct.count-1}
                                                                }
                                                                case PRODUCT_TYPES.START_ADDING_CATEGORY:
                                                                    return{
                                                                        ...state,
                                                                        addLoading:true,
                                                                        addErrorMessage:null                                     
                                                                    }
                                                                    case PRODUCT_TYPES.SUCCESS_ADD_CATEGORY:
                                                                        return{
                                                                            ...state,
                                                                            addLoading:false,
                                                                            categories:addNewCategory(state.categories,action.payload)
                                                                        }
                                                                        case PRODUCT_TYPES.SUCCESS_EDIT_CATEGORY:
                                                                            return{
                                                                                ...state,
                                                                                editLoading:false,
                                                                                categories:editData(state.categories,action.payload)
                                                                            }
                                                                        case PRODUCT_TYPES.FAILURE_UPLOAD_IMAGE:
                                                                                return{
                                                                                    ...state,
                                                                                    addLoading:false,
                                                                                    addErrorMessage:action.payload
                                                                                } 
                                                                                case PRODUCT_TYPES.START_EDITING_CATEGORY:
                                                                                    return{
                                                                                        ...state,
                                                                                        editLoading:true,
                                                                                        editErrorMessage:null                                     
                                                                                    }
                                                                                    case PRODUCT_TYPES.FAILURE_EDITING_CATEGORY:
                                                                                        return{
                                                                                            ...state,
                                                                                            editLoading:false,
                                                                                            editErrorMessage:action.payload
                                                                                        }
                                                                                        //product
                                                                                         case PRODUCT_TYPES.START_ADDING_PRODUCT:
                                                                                            return{
                                                                                                ...state,
                                                                                                addLoadingProduct:true,
                                                                                                addErrorMessageProduct:null                                     
                                                                                            }
                                                                                            case PRODUCT_TYPES.SUCCESS_ADD_PRODUCT:
                                                                                                return{
                                                                                                    ...state,
                                                                                                    addLoadingProduct:false,
                                                                                                    products:addNewProduct(state.products,action.payload)
                                                                                                }
                                                                                                case PRODUCT_TYPES.SUCCESS_EDIT_PRODUCT:
                                                                                                    return{
                                                                                                        ...state,
                                                                                                        editLoadingProduct:false,
                                                                                                        products:editProduct(state.products,action.payload)
                                                                                                    }
                                                                                                case PRODUCT_TYPES.FAILURE_UPLOAD_PRODUCT_IMAGE:
                                                                                                        return{
                                                                                                            ...state,
                                                                                                            addLoadingProduct:false,
                                                                                                            addErrorMessageProduct:action.payload
                                                                                                        } 
                                                                                                        case PRODUCT_TYPES.START_EDITING_PRODUCT:
                                                                                                            return{
                                                                                                                ...state,
                                                                                                                editLoadingProduct:true,
                                                                                                                editErrorMessageProduct:null                                     
                                                                                                            }
                                                                                                            case PRODUCT_TYPES.FAILURE_EDITING_PRODUCT:
                                                                                                                return{
                                                                                                                    ...state,
                                                                                                                    editLoadingProduct:false,
                                                                                                                    editErrorMessageProduct:action.payload
                                                                                                                }
                                                                                                                case PRODUCT_TYPES.TOGGLE_LIKE:
                                                                                                                    return{
                                                                                                                        ...state,
                                                                                                                        currentProduct:{...state.currentProduct,isLiked:!(state.currentProduct.isLiked)}
                                                                                                                    }
                                                            
                                                       
        default:
            return state;
            
    }
}