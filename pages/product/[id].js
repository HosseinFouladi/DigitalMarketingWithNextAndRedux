import { useEffect ,useLayoutEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "../../components/dashboard/Dashboard";
import Layout from "../../components/layout/Layout";
import { findproduct } from "../../redux/actions/ProductActions";
import {wrapper} from '../../redux/redux-setting/store';
import { selectCurrentProduct } from "../../redux/selectors/ProductSelector";
import { findProduct } from "../../utilities/ProductHelper";
const Product=({id})=>{


     const dispatch=useDispatch();
     const prod=useSelector(selectCurrentProduct);
    useLayoutEffect(()=>{
        dispatch(findproduct(id));
        console.log(prod);
    },[prod])

    return(
        <div>
            <Layout>
                <Dashboard type='preview'/>
            </Layout>
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

 /* export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
      async ({ req, res,params,dispatch}) => {
        await  store.dispatch(findproduct(params.id));
        console.log(params)
        return{
            props:{
                params
            }
        }
      });*/