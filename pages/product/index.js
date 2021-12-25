import Dashboard from "../../components/dashboard/Dashboard";
import Layout from "../../components/layout/Layout";
import { wrapper } from "../../redux/redux-setting/store";
import categories from '../../data/Categories.json';
import products from '../../data/Products.json';
import { insertAllCategories, insertAllProducts } from "../../redux/actions/ProductActions";

const index=()=>{
    return(
        <Layout children={<Dashboard type='product'/>}></Layout>
    )
}
export default index;

/*export const getServerSideProps=wrapper.getServerSideProps(async({store})=>{
    await store.dispatch(insertAllCategories(categories));
})*/
export const getStaticProps = wrapper.getStaticProps((store) =>
      async () => {
        await store.dispatch(insertAllCategories(categories));
        await store.dispatch(insertAllProducts(products));
      });

