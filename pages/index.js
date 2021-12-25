
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Notif from '../components/notification/Notification';
import Register from '../components/register/register';
import { selectCurrentUser } from '../redux/selectors/UserSelector';
import { errorHandler, postInfo } from '../utilities/ApiHelper';
import { API_URL } from '../utilities/Constants';


export default function Home() {


  const currentUser=useSelector(selectCurrentUser);
  const [errorMessage,setErrorMessage]=useState('');
  const router=useRouter();
  const submitForm = (data) => {
    console.log(data);

    const login= async()=>{
    const{username,password}=data;
    
    try{
      const infos=await postInfo(`${API_URL.TEST}?userName=${username}&password=${password}`);
      localStorage.setItem('user',JSON.stringify(infos));
      localStorage.setItem('token',infos.token);
    }catch(err){
        console.log(err)
    }
    }
 
    const loginWithReduxState=()=>{

      const{username,password}=currentUser;
      if(username!==data.username&&password!==data.password){
          router.push('/product/');
      }else{
        Notif("danger","username or password is incorrect!try again");
      }
    }

    loginWithReduxState();
  }
  return (
    <div >

      <Register type={'login'} submitForm={submitForm}></Register>

    </div>
  )
}
