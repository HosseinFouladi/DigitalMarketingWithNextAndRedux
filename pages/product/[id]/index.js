import { useEffect ,useLayoutEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../../components/dashboard/Dashboard";
import Layout from "../../../components/layout/Layout";
import { findproduct } from "../../../redux/actions/ProductActions";
import { selectCurrentProduct } from "../../../redux/selectors/ProductSelector";
import { useRouter } from "next/router";
import { selectCurrentUser } from "../../../redux/selectors/UserSelector";
const Product=({id})=>{


     const dispatch=useDispatch();
     const prod=useSelector(selectCurrentProduct);
     const router=useRouter();
     const user=useSelector(selectCurrentUser);
     useEffect(()=>{
         if(!user.name){
             router.replace('/');
         }
     },[])
    useLayoutEffect(()=>{
        dispatch(findproduct(id));
    },[prod])



    return(
        <div>
           {user.name? <Layout>
                <Dashboard type='preview'/>
            </Layout>:''}
        </div>
    )
}
export default Product;

export async function getServerSideProps({params}) {

    return {
      props: {
          id:params.id
      }, 
    }
  }
