import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../redux/actions/UserActions";
import { selectUserLoading } from "../../redux/selectors/UserSelector";
import { ErrorSpan, FileInput, Form, Input, InputBox, InputMark, Label, RoleOption, SelectRole, SubmitButton, UploadIcon, UploadImageBox } from "../../styles/register/LoginForm.style";
import { ButtonContent,Loader,ButtonText,Circle } from "../../styles/admin/AddCategory.style";

const LoginForm=({type,submitForm})=>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch=useDispatch();
    const userLoading=useSelector(selectUserLoading);
    const handleUploadImage=useCallback(e=>{

     dispatch(setImage(e.target.files[0]));

    },[setImage])
    return (
          <Form onSubmit={handleSubmit(submitForm)}>
              {type==='signup'&& <InputBox>
            <Input type='text' placeholder='نام' {...register("name",{required:true,minLength:3})} />
               {errors.name && <ErrorSpan>{errors.name.type==='requird'?'نام خود را وارد کنید!':'نام وارد شده حداقل باید سه حرف داشته باشد !'}</ErrorSpan>}
               <InputMark>نام</InputMark>
            </InputBox>}
            <InputBox>
            <Input type='text' placeholder='نام کاربری' {...register("username",{required:true,minLength:3})} />
               {errors.username && <ErrorSpan>{errors.username.type==='requird'?'نام کاربری خود را وارد کنید!':'نام کاربری وارد شده حداقل باید سه حرف داشته باشد!'}</ErrorSpan>}
               <InputMark>نام کاربری</InputMark>
            </InputBox>
            <InputBox>
            <Input placeholder='رمز عبور' type='password' {...register("password", { required: true,minLength:5 })} />
                {errors.password && <ErrorSpan>{errors.password.type==='requird'?'رمز عبور خود را وارد کنید!':'رمزعبور وارد شده حداقل باید پنج حرف داشته باشد!'}</ErrorSpan>}
                <InputMark>رمز عبور</InputMark>
            </InputBox>
            {type=='signup'&&    <InputBox>
            <SelectRole   {...register("role", { required: true })} >
                <RoleOption>کاربر عادی</RoleOption>
                <RoleOption>ادمین</RoleOption>
            </SelectRole>
                {errors.role && <ErrorSpan>رمزعبور وارد شده حداقل باید پنج حرف داشته باشد!</ErrorSpan>}
                <InputMark>ثبت نام به عنوان</InputMark>
            </InputBox>}
            {type==='signup'&& <InputBox>
             <UploadImageBox>
              <Label htmlFor='avatar'>انتخاب عکس</Label>
              <UploadIcon icon={faFolderOpen}/>
             </UploadImageBox>
            <FileInput type='file' id='avatar' onChange={handleUploadImage} accept="image/*" required='true'/>  
            </InputBox>}
            <SubmitButton types={'edit'} disabled={userLoading&&type!='login'?true:false} loading={userLoading&&type!='login'} name='edit'>
                <ButtonContent>
                 {(!userLoading || type=='login')&& <ButtonText>{type==='login'?'ورود':'ثبت نام'}</ButtonText>}
               {(userLoading  && type!='login') && <Loader  viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <Circle  fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></Circle>
                </Loader>}
                 </ButtonContent>
                </SubmitButton>
          </Form>
        );
    
}
export default LoginForm;
