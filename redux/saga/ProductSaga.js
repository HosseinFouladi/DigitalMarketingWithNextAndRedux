import { put,all,call } from "@redux-saga/core/effects";
import { takeEvery } from "redux-saga/effects";
import { failureAddingCat, failureEditingCat ,successAddingCategory, successEditingCategory ,successAddingProduct, failureAddingProduct, successEditingProduct, failureEditingProduct} from "../actions/ProductActions";
import { PRODUCT_TYPES } from "../ActionTypes/ProductTypes";
import { uploadPictureToCloudinary } from "../../utilities/ApiHelper";
import Notif from "../../components/notification/Notification";

export function* addCategoryAsync({payload}){
    try{
        const uploadedImage=yield uploadPictureToCloudinary(payload.image);
        yield put(successAddingCategory({icon:uploadedImage.data.url,categoryName:payload.categoryName,categoryId:payload.categoryId}));
        Notif('success','دسته بندی جدید اضافه شد','انجام شد')
    }catch(err){
        yield put(failureAddingCat(err));
        Notif('danger',err.toString(),'ناموفق')
    }
}

export function* fetchAddCategory(){
    yield takeEvery(PRODUCT_TYPES.START_ADDING_CATEGORY,addCategoryAsync)
}

export function* editCategoryAsync({payload}){
    try{
        const uploadedImage=yield uploadPictureToCloudinary(payload.image);
        yield put(successEditingCategory({icon:uploadedImage.data.url,categoryName:payload.categoryName,categoryId:payload.categoryId}));
        Notif('success','دسته بندی با موفقیت ویرایش شد','انجام شد')
    }catch(err){
        yield put(failureEditingCat(err));
        Notif('danger',err.toString(),'ناموفق')
    }
}

export function* fetchEditCategory(){
    yield takeEvery(PRODUCT_TYPES.START_EDITING_CATEGORY,editCategoryAsync)
}

//product
export function* addProductAsync({payload}){
    let temp=[];
    try{
        if(payload.images[0]){
            const uploadedImage1=yield uploadPictureToCloudinary(payload.images[0]);
            temp.push(uploadedImage1);
        }
        if(payload.images[1]){
            const uploadedImage2=yield uploadPictureToCloudinary(payload.images[1]);
            temp.push(uploadedImage2);
        }
        if(payload.images[2]){
            const uploadedImage3=yield uploadPictureToCloudinary(payload.images[2]);
            temp.push(uploadedImage3);
        }
        const address=addUrls(temp);
        yield put(successAddingProduct({imageUrl:[...address],productName:payload.productName,categoryId:payload.categoryId,productId:payload.productId,price:payload.price,count:payload.count,score:2,likes:0,colors:["#99CCCC","#FF9933","#990033"],isAvailable:payload.count>0?true:false}));
        Notif('success','محصول جدید اضافه شد','انجام شد')
    }catch(err){
        yield put(failureAddingProduct(err));
        Notif('danger',err.toString(),'ناموفق')
    }
}

export function* fetchAddProduct(){
    yield takeEvery(PRODUCT_TYPES.START_ADDING_PRODUCT,addProductAsync)
}

export function* editProductAsync({payload}){
  
    let temp=[];
    try{
        if(payload.images[0]){
            const uploadedImage1=yield uploadPictureToCloudinary(payload.images[0]);
            temp.push(uploadedImage1);
        }
        if(payload.images[1]){
            const uploadedImage2=yield uploadPictureToCloudinary(payload.images[1]);
            temp.push(uploadedImage2);
        }
        if(payload.images[2]){
            const uploadedImage3=yield uploadPictureToCloudinary(payload.images[2]);
            temp.push(uploadedImage3);
        }
        
        const address=addUrls([...temp]);
        yield put(successEditingProduct({imageUrl:[...address],productName:payload.productName,categoryId:payload.categoryId,productId:payload.productId,price:payload.price,count:payload.count,score:2,likes:0,colors:["#99CCCC","#FF9933","#990033"],isAvailable:payload.count>0?true:false}));
        Notif('success','محصول جدید اضافه شد','انجام شد')
    }catch(err){
        yield put(failureEditingProduct(err));
        Notif('danger',err.toString(),'ناموفق')
    }
}

export function* fetchEditProduct(){
    yield takeEvery(PRODUCT_TYPES.START_EDITING_PRODUCT,editProductAsync)
}

export default function* ProductSaga(){
    yield all([call(fetchAddCategory),call(fetchEditCategory),call(fetchAddProduct),call(fetchEditProduct)]);
}

const addUrls=(collection)=>{
    const res=collection.map(item=>{
        if(item!=undefined)
         return item.data.url
    })
    return res;
}