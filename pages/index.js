
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notif from '../components/notification/Notification';
import Register from '../components/register/register';
import { selectCurrentUser } from '../redux/selectors/UserSelector';;
import categories from '../data/Categories.json';
import products from '../data/Products.json';
import { insertAllCategories, insertAllProducts } from "../redux/actions/ProductActions";

export default function Home() {
  const currentUser=useSelector(selectCurrentUser);
  const router=useRouter();
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(insertAllCategories(categories));
    dispatch(insertAllProducts(products));
  },[])

  const submitForm = (data) => {
 
    const loginWithReduxState=()=>{
      const{username,password}=currentUser;
      if(username===data.username&&password===data.password){
          sessionStorage.setItem('user',JSON.stringify(currentUser));
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
/*export const getStaticProps = wrapper.getStaticProps((store) =>
      async () => {
        await store.dispatch(insertAllCategories(categories));
        await store.dispatch(insertAllProducts(products));
      });*/