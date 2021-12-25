import axios from "axios";

const instance = axios.create({
    baseURL: 'http://restapi.adequateshop.com/api/',//http://restapi.adequateshop.com/api/
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}//application/json
  });
export const postInfo=async(url,data,auth)=>{


    try{
        const request=await instance.post(url,data,{
            headers:{
                Authorization:auth?`Bearer ${auth}`:null,
           
            },
            responseType:"json"
        })
        return request.data;

    }catch(err){
        return err.message;
    }

}

export const errorHandler=(func)=>{

    return new Promise((resolve,reject)=>{
        try{
            resolve(func());
        }catch(err){
            reject(console.log('err.message'))
        }
       
     
    })
}