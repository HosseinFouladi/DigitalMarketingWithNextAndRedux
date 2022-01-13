import { put,all,call } from "@redux-saga/core/effects";
import { takeLatest } from "redux-saga/effects";
import { uploadPictureToCloudinary } from "../../utilities/ApiHelper";
import Notif from "../../components/notification/Notification";
import { failureUploadingInfo, successUploadingInfo } from "../actions/UserActions";
import { USERTYPES } from "../ActionTypes/Usertypes";

export function* setUserAsync({payload}){
    try{
        const uploadedImage=yield uploadPictureToCloudinary(payload.image);
        yield put(successUploadingInfo({imageUrl:uploadedImage.data.url}));
    }catch(err){
        yield put(failureUploadingInfo(err))
        Notif('danger',err,'ناموفق')
    }
}

export function* fetchUser(){
    yield takeLatest(USERTYPES.START_UPLOADING_USER_PICTURE,setUserAsync)
}


export default function* Usersaga(){
    yield all([call(fetchUser)]);
}