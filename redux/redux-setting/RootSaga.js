import {all,call}from 'redux-saga/effects';
import ProductSaga from '../saga/ProductSaga';
import Usersaga from '../saga/UserSaga';

export const RootSaga=function*(){
    yield all([call(ProductSaga),call(Usersaga)])
}