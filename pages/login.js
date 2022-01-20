import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Notif from "../components/notification/Notification";
import Register from "../components/register/register";
import { selectCurrentUser } from "../redux/selectors/UserSelector";

export default function Home() {
  const currentUser = useSelector(selectCurrentUser);
  const router = useRouter();

  const submitForm = (data) => {
    const loginWithReduxState = () => {
      const { username, password } = currentUser;
      if (username === data.username && password === data.password) {
        sessionStorage.setItem("user", JSON.stringify(currentUser));
        router.push("/");
      } else {
        Notif("danger", "نام کاربری یا رمز عبور اشتباه است", "یافت نشد");
      }
    };

    loginWithReduxState();
  };
  return (
    <div>
      <Register type={"login"} submitForm={submitForm}></Register>
    </div>
  );
}
/*export const getStaticProps = wrapper.getStaticProps((store) =>
      async () => {
        await store.dispatch(insertAllCategories(categories));
        await store.dispatch(insertAllProducts(products));
      });*/
