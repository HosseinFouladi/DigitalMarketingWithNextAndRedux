import {PRODUCT_TYPES}from '../ActionTypes/ProductTypes';


export const addCategory=(category)=>({
    type:PRODUCT_TYPES.ADD_CATEGORY,
    payload:category
});
export const deleteCategory=(categoryId)=>({
    type:PRODUCT_TYPES.DELETE_CATEGORY,
    payload:categoryId
});
export const insertAllCategories=(categories)=>({
    type:PRODUCT_TYPES.INSERT_ALL_CATEGORY,
    payload:categories
});
export const findCategory=(categoryId)=>({
    type:PRODUCT_TYPES.FIND_CATEGORY,
    payload:categoryId
});
export const editCategory=(category)=>({
    type:PRODUCT_TYPES.EDIT_CATEGORY,
    payload:category
});
export const addproduct=(product)=>({
    type:PRODUCT_TYPES.ADD_PRODUCTS,
    payload:product
});
export const deleteproduct=(productId)=>({
    type:PRODUCT_TYPES.DELETE_PRODUCT,
    payload:productId
});
export const insertAllProducts=(product)=>({
    type:PRODUCT_TYPES.INSERT_ALL_PRODUCTS,
    payload:product
});
export const findproduct=(productId)=>({
    type:PRODUCT_TYPES.FIND_PRODUCT,
    payload:productId
});
export const editproduct=(product)=>({
    type:PRODUCT_TYPES.EDIT_PRODUCT,
    payload:product
});

export const setRelatedProducts=(categoryId)=>({
    type:PRODUCT_TYPES.GET_RELATED_PRODUCTS_FOR_CATEGORY,
    payload:categoryId
});
export const setSearchProducts=(key)=>({
    type:PRODUCT_TYPES.SEARCH_PRODUCTS,
    payload:key
});

export const setLikeCount=(operator)=>({
    type:PRODUCT_TYPES.ADD_LIKE_COUNT,
    payload:operator
});

export const setCount=()=>({
    type:PRODUCT_TYPES.DECREASE_PRODUCT_COUNT
});


//saga
export const startAddingCat=(category)=>({
    type:PRODUCT_TYPES.START_ADDING_CATEGORY,
    payload:category
});
export const startEdditingCat=(category)=>({
    type:PRODUCT_TYPES.START_EDITING_CATEGORY,
    payload:category
});
export const successAddingCategory=(category)=>({
    type:PRODUCT_TYPES.SUCCESS_ADD_CATEGORY,
    payload:category
});
export const successEditingCategory=(category)=>({
    type:PRODUCT_TYPES.SUCCESS_EDIT_CATEGORY,
    payload:category
});
export const failureAddingCat=(err)=>({
    type:PRODUCT_TYPES.FAILURE_UPLOAD_IMAGE,
    payload:err
});
export const failureEditingCat=(err)=>({
    type:PRODUCT_TYPES.FAILURE_EDITING_CATEGORY,
    payload:err
});
//product
export const startAddingProduct=(product)=>({
    type:PRODUCT_TYPES.START_ADDING_PRODUCT,
    payload:product
});
export const startEdditingProduct=(product)=>({
    type:PRODUCT_TYPES.START_EDITING_PRODUCT,
    payload:product
});
export const successAddingProduct=(product)=>({
    type:PRODUCT_TYPES.SUCCESS_ADD_PRODUCT,
    payload:product
});
export const successEditingProduct=(product)=>({
    type:PRODUCT_TYPES.SUCCESS_EDIT_PRODUCT,
    payload:product
});
export const failureAddingProduct=(err)=>({
    type:PRODUCT_TYPES.FAILURE_UPLOAD_PRODUCT_IMAGE,
    payload:err
});
export const failureEditingProduct=(err)=>({
    type:PRODUCT_TYPES.FAILURE_EDITING_PRODUCT,
    payload:err
});
export const toggleLike=()=>({
    type:PRODUCT_TYPES.TOGGLE_LIKE,
});
export const setEmpty=()=>({
    type:PRODUCT_TYPES.SET_EMPTY_PRODUCT,
});