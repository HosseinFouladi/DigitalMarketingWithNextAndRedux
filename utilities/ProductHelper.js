
export const deleteData=(collection,id)=>{


    let isFound=false;
    const filtered=collection.filter(item=>{
        isFound=true;
        return item.categoryId!=id
    });

    if(!isFound){
        throw 'دسته بندی با این شناسه وجود ندارد';
    }
     
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
export const editData=(collection,newData)=>{

    let notFound=true;
    const coll=collection.map(item=>{
       if(item.categoryId==newData.categoryId){
           notFound=false;
           return newData;
       }else{
           return item;
       }
    })
    if(notFound)
      throw 'دسته بندی با این شناسه پیدا نشد!'
    return coll;
}
export const getRelatedProducts=(products,cateoryId)=>{
    const relatedProducts=products.filter(item=>item.categoryId==cateoryId);
    return relatedProducts;
}
export const searchProducts=(products,key)=>{
    if(key=='')
    return [];
 const searchedProduct=products.filter(item=>item.productName.includes(key));
 return searchedProduct;
}
export const addLike=(current,collection,operator)=>{

    const products=collection.map(item=>{
        if(item.productId==current.productId){
            if(operator=='increment'){
                return {...item,likes:(item.likes)+1,isLiked:!item.isLiked}
            }else{
                return {...item,likes:(item.likes)-1,isLiked:!item.isLiked}
            }
        }
        return item;
    })
    return products;
}
export const decraseProducrCount=(current,collection)=>{

    

    const products=collection.map(item=>{
        if(item.productId==current.productId){
            if(item.count<=1){
                return {...item,count:item.count-1,isAvailable:false}
            }
            return {...item,count:item.count-1}
        }
        return item;
    })
    return products;
}
export const addNewCategory=(categories,newCat)=>{

    let isFound=false;
    categories.forEach(element => {
        if(element.categoryId==newCat.categoryId){
           isFound=true;
        }
        
    });
    if(isFound)
      throw 'دسته بندی با این شناسه قبلا وجود دارد!';
    return [...categories,newCat];
}

export const addNewProduct=(products,newCat)=>{

    let isFound=false;
    products.forEach(element => {
        if(element.productId==newCat.productId){
           isFound=true;
        }
        
    });
    if(isFound)
      throw 'محصول با این شناسه قبلا وجود دارد!';
    return [...products,newCat];
}

export const editProduct=(collection,newData)=>{

    let notFound=true;
    const coll=collection.map(item=>{
       if(item.productId==newData.productId){
           notFound=false;
           return newData;
       }else{
           return item;
       }
    })
    if(notFound)
      throw 'محصول با این شناسه پیدا نشد!'
    return coll;
}
export const deleteProduct=(collection,id)=>{


    let isFound=false;
    const filtered=collection.filter(item=>{
        if(item.productId==id)
          isFound=true;
        return item.productId!=id
    });

    if(!isFound){
        throw 'دسته بندی با این شناسه وجود ندارد';
    }
     
    return filtered;
}