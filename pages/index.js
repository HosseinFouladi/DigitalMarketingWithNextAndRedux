import Dashboard from "../components/dashboard/Dashboard";
import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEmpty } from "../redux/actions/ProductActions";

const Index=()=>{

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setEmpty());
    },[])
    return(
            <Layout><Dashboard type='product'/></Layout>
    )
}
export default Index;

/*export const getServerSideProps=wrapper.getServerSideProps(async({store})=>{
    await store.dispatch(insertAllCategories(categories));
})*/
/*export const getStaticProps = wrapper.getStaticProps((store) =>
      async () => {
        await store.dispatch(insertAllCategories(categories));
        await store.dispatch(insertAllProducts(products));
      });*/

