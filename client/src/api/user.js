import {axiosInstance} from "./index"

export const registerUser = async (values)=>{
    try{
        const res = await axiosInstance.post('http://localhost:5000/api/users/register',values)
    
    return res.data
    }
    catch(err){
        console.log(err)
    }
}

export const userLogin = async (values)=>{
    try{
        const res = await axiosInstance.post('http://localhost:5000/api/users/login',values)

        return res.data
    }
    catch(err){
        console.log(err)
    }
}