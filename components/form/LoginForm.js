import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setImage } from "../../redux/actions/UserActions";
import { ErrorSpan, FileInput, Form, Input, InputBox, InputMark, Label, SubmitButton } from "../../styles/register/LoginForm.style";

const LoginForm=({type,submitForm})=>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch=useDispatch();
    const handleUploadImage=useCallback(e=>{

     dispatch(setImage(e.target.files[0]));

    },[setImage])
    return (
          <Form onSubmit={handleSubmit(submitForm)}>
              {type==='signup'&& <InputBox>
            <Input type='text' placeholder='Name' {...register("name",{required:true,minLength:5})} />
               {errors.name && <ErrorSpan>{errors.name.type==='requird'?'name is required!':'name must be more than 5 charachters!'}</ErrorSpan>}
               <InputMark>Name</InputMark>
            </InputBox>}
            <InputBox>
            <Input type='text' placeholder='Username' {...register("username",{required:true,minLength:3})} />
               {errors.username && <ErrorSpan>{errors.username.type==='requird'?'username is required!':'username must be more than 5 charachters!'}</ErrorSpan>}
               <InputMark>Username</InputMark>
            </InputBox>
            <InputBox>
            <Input placeholder='Password' type='password' {...register("password", { required: true,minLength:3 })} />
                {errors.password && <ErrorSpan>{errors.password.type==='requird'?'password is required!':'password must be more than 7 charachters!'}</ErrorSpan>}
                <InputMark>Password</InputMark>
            </InputBox>
            {type==='signup'&& <InputBox>
            <Label htmlFor='avatar'>Choose an avatar</Label>
            <FileInput type='file' id='avatar' onChange={handleUploadImage} accept="image/*" required='true'/>  
            </InputBox>}
            <SubmitButton >{type==='login'?'Login':'Sign Up'}</SubmitButton>
          </Form>
        );
    
}
export default LoginForm;