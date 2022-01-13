
export const addToCart=(products,newProduct)=>{

    let isFound=false;
    let collection;
       if(products){
        collection=products.map(item=>{
            if(item.productId==newProduct.productId){
                isFound=true;
                return {...item,reserveCount:item.reserveCount?item.reserveCount+1:1}
            }
            return {...item};
        })
       }
        if(isFound)
          return [...collection];
          else 
          return[...collection,{...newProduct,reserveCount:1}]
}


export const setReservedCount=(products,currentProduct,operator)=>{

    if(currentProduct.reserveCount<=1&&operator=='decrement')
           return deleteProductFromCart(products,currentProduct.productId);

    const collection=products.map(item=>{
        if(item.productId==currentProduct.productId){
            return{...item,reserveCount:operator=='decrement'?item.reserveCount-1:item.reserveCount+1};
        }
        return{...item};
    })
    return collection;
}

export const deleteProductFromCart=(products,pId)=>{
    const collection=products.filter(item=>item.productId!=pId);
    return collection;
}