import axios from 'axios';

const Api_Url ='http://127.0.0.1:3002/users';

export const addUser=async (data)=>{
    try{
     return await axios.post(Api_Url, data)
    }catch(error){
        console.log('error while calling adduser api',error.message)
    }
}

export const getUsers=async ()=>{
    try{
        return await axios.get(Api_Url)
    }catch(error){console.log('error while calling getusers api',error.message)}
}
export const getUser=async (data)=>{
    try{
        return await axios.get(`${Api_Url}/${data}`)
    }catch(error){console.log('error while calling getuser api',error.message)}
}
export const editUser=async (data,id)=>{
    try{
        return await axios.put(`${Api_Url}/${id}`,data)
    }catch(error){console.log('error while calling edituser api',error.message)}
}
export const deleteUser=async (id)=>{
    try{
        return await axios.delete(`${Api_Url}/${id}`)
    }catch(error){console.log('error while calling deleteuser api',error.message)}
}