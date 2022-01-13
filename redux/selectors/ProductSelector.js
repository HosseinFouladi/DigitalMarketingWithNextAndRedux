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
export const selectLikeSituation=createSelector(
    [product],
    product=>product.currentProduct.isLiked
)
export const selectRelatedProduct=createSelector(
    [product],
    product=>product.relatedProducts
)
export const selectSearchedProducts=createSelector(
    [product],
    product=>product.searchedProducts
)

export const selectaddLoading=createSelector(
    [product],
    product=>product.addLoading
)
export const selectAddErrorMessage=createSelector(
    [product],
    product=>product.addErrorMessage
)

export const selectEditLoading=createSelector(
    [product],
    product=>product.editLoading
)
export const selectEditErrorMessage=createSelector(
    [product],
    product=>product.editErrorMessage
)
//product

export const selectaddLoadingProduct=createSelector(
    [product],
    product=>product.addLoadingProduct
)
export const selectAddErrorMessageProduct=createSelector(
    [product],
    product=>product.addErrorMessageProduct
)

export const selectEditLoadingProduct=createSelector(
    [product],
    product=>product.editLoadingProduct
)
export const selectEditErrorMessageProduct=createSelector(
    [product],
    product=>product.editErrorMessageProduct
)

