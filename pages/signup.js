import { useDispatch, useSelector } from "react-redux";
import Register from "../components/register/register";
import {
  startUploadingInfo,
  successUploadingInfo,
} from "../redux/actions/UserActions";
import {
  selectCurrentUser,
  selectUserImage,
} from "../redux/selectors/UserSelector";
import { useRouter } from "next/router";
import Notif from "../components/notification/Notification";

const Signup = () => {
  const image = useSelector(selectUserImage);
  const router = useRouter();
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(successUploadingInfo({ ...data }));
    try {
      dispatch(startUploadingInfo({ image }));
      setTimeout(() => {
        Notif("success", "با موفقیت ثبت نام کردید", "ثبت نام موفق");
        router.push("/");
      }, 1000);
    } catch (err) {
      Notif("danger", err, "ناموفق");
    }
  };

  return (
    <div>
      <Register type={"signup"} submitForm={submitForm}></Register>
    </div>
  );
};
export default Signup;
