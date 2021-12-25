
export const deleteData=(collection,id)=>{

    const filtered=collection.filter(item=>item.id!==id);
    return filtered;
}
export const findProduct=(collection,id)=>{
    const foundedData=collection.find(item=>item.productId==id);
    return foundedData;
    
}
export const findCategory=(collection,id)=>{
    const foundedData=collection.find(item=>item.categoryId==id);
    return foundedData;
}
export const editData=(collection,oldData,newData)=>{


    const coll=collection.map(item=>{
       if(item.id===oldData.id){
           return newData;
       }else{
           return item;
       }
    })
    return coll;
}
export const getRelatedProducts=(products,cateoryId)=>{
    console.log("fdf")
    const relatedProducts=products.filter(item=>item.categoryId===cateoryId);
    return relatedProducts;
}
export const searchProducts=(products,key)=>{
    if(key=='')
    return [];
 const searchedProduct=products.filter(item=>item.productName.includes(key));
 return searchedProduct;
}