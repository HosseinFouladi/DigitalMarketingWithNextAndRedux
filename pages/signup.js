import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Register from "../components/register/register"
import { setCurrentUser, setImageUrl } from "../redux/actions/UserActions";
import { selectCurrentUser, selectImageUrl, selectUserImage } from "../redux/selectors/UserSelector";
import axios from "axios";
import { useRouter } from "next/router";


const Signup=()=>{

    const image=useSelector(selectUserImage);
    const router = useRouter();
    const dispatch=useDispatch();
    const submitForm=(data)=>{

        const upload=async()=>{
            const data1 = new FormData()
            data1.append("file", image)
            data1.append("upload_preset", "my-marketing-app")
            data1.append("cloud_name","my-cloudinary-dashboard");
            try{
                const uploadedImage= await axios.post(" https://api.Cloudinary.com/v1_1/my-cloudinary-dashboard/image/upload",data1);
                dispatch(setImageUrl(uploadedImage.data.url));
            }catch(err){
                console.log(err);
            }
        }


        const signup=async()=>{

            upload();
            dispatch(setCurrentUser(data));
            router.push('/');

        }
        signup();

        }

    return(
        <div>
            <Register type={'signup'} submitForm={submitForm} ></Register>
        </div>
    )
}
export default Signup;