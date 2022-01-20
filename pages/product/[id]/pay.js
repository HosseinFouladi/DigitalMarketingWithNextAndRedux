import Layout from "../../../components/layout/Layout";
import Payment from "../../../components/payment/Payment";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/selectors/UserSelector";
import { useEffect } from "react";
const Pay = () => {
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    if (!user.name) {
      router.replace("/login");
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
