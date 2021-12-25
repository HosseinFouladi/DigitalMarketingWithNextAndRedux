import { deleteData, editData, findCategory, findData, findProduct, getRelatedProducts, searchProducts } from "../../utilities/ProductHelper";
import { PRODUCT_TYPES } from "../ActionTypes/ProductTypes";
import { HYDRATE } from "next-redux-wrapper"

const Initial_Product={
    products:[],    
    categories:[],
    currentCategory:{},
    currentProduct:{},
    relatedProducts:[],
    searchedProducts:[]
}

export const ProductReducer=(state=Initial_Product,action)=>{

    console.log(state.products)
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
                    categories:[...state.categories,action.payload]
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
                                categories:editData(state.categories,currentCategory,action.payload)
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
                                            products:deleteData(state.products,action.payload)
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
                                                       
        default:
            return state;
            
    }
}