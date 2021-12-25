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