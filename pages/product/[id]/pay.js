import Layout from "../../../components/layout/Layout";
import Payment from "../../../components/payment/Payment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/selectors/UserSelector";
import { useEffect } from "react";
import Notif from "../../../components/notification/Notification";
const Pay = () => {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  const { products } = useSelector(selectCurrentUser);
  useEffect(() => {
    if (!user.name) {
      router.replace("/login");
    }
    if(products.length<1){
      Notif('warning',"هیچ محصولی موجود نیست",'ناموجود')
      router.replace("/")
    }
  }, []);
  return (
    <div>
      {user.name ? (
        <Layout>
          <Payment />
        </Layout>
      ) : (
        ""
      )}
    </div>
  );
};
export default Pay;
