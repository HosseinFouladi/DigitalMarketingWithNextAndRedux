import { SpinnerBox } from "../../styles/material-ui/Spinner.style";
import CircularIndeterminate from "./Spinner";


const SpinnerContainer=()=>{
    return(
        <SpinnerBox>
            <CircularIndeterminate/>
        </SpinnerBox>
    )
}
export default SpinnerContainer;