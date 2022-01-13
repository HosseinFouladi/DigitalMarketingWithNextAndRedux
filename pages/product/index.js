import Dashboard from "../../components/dashboard/Dashboard";
import Layout from "../../components/layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/selectors/UserSelector";
const index=()=>{

    const router=useRouter();
    const user=useSelector(selectCurrentUser);
    
    useEffect(()=>{
        if(!user.name){
            router.replace('/');
        }
  
    },[])

    return(
       <div>
           {user.name? <Layout children={<Dashboard type='product'/>}></Layout>:''}
       </div>
    )
}
export default index;

/*export const getServerSideProps=wrapper.getServerSideProps(async({store})=>{
    await store.dispatch(insertAllCategories(categories));
})*/
/*export const getStaticProps = wrapper.getStaticProps((store) =>
      async () => {
        await store.dispatch(insertAllCategories(categories));
        await store.dispatch(insertAllProducts(products));
      });*/

