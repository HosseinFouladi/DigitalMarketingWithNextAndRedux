import { createSelector } from "reselect";

const product=state=>state.product;

export const selectAllCategories=createSelector(
    [product],
    product=>product.categories
)

export const selectAllProducts=createSelector(
    [product],
    product=>product.products
)
export const selectCurrentCategory=createSelector(
    [product],
    product=>product.currentCategory
)
export const selectCurrentProduct=createSelector(
    [product],
    product=>product.currentProduct
)
export const selectRelatedProduct=createSelector(
    [product],
    product=>product.relatedProducts
)
export const selectSearchedProducts=createSelector(
    [product],
    product=>product.searchedProducts
)