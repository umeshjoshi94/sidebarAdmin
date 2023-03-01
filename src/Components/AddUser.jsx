import { useState } from "react";
import { FormControl, FormGroup, InputLabel,Input,Button, Typography,styled } from "@mui/material";
import { addUser } from "../Service/api";
import { Navigation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const Container = styled(FormGroup)`
    width: 50%;
    margin:5% auto 0 auto;
    & > div{margin-top:20px}
`;
//  const initialValue={
//     name:'',
//     username:'',
//     email:'',
//     phone:''
//  }
const AddUser=()=>{
    //const [user,setUser]=useState(initialValue);
    const navigate=useNavigate();
    //const { name, username, email, phone } = user;

    // const onValueChange=(e)=>{
    //   //console.log(e.target.value)
    //   setUser({...user,[e.target.name]:e.target.value})
    //   console.log(user)
    // }

    // const addUserDetail=async()=>{
       
    // }
    const { register, handleSubmit,formState: { errors }  } = useForm();
    const handleRegistration = async (data) => {
         await addUser(data)
        navigate('/customers')
    }
    return<>
    <Container>
    <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel >Name</InputLabel>
            {/* <Input onChange={(e)=>onValueChange(e)} name="name" value={name}/> */}
            <Input  {...register("name", { required: true })} 
        aria-invalid={errors.name ? "true" : "false"} />
        {errors.name?.type === 'required' && <p role="alert"> name is required</p>}
        </FormControl> 
        <FormControl>
            <InputLabel >Username</InputLabel>
            {/* <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/> */}
            <Input  {...register("username", { required: true })} 
        aria-invalid={errors.username ? "true" : "false"} />
        {errors.username?.type === 'required' && <p role="alert">Username is required</p>}
        </FormControl> 
        <FormControl>
            <InputLabel >Email</InputLabel>
            {/* <Input onChange={(e)=>onValueChange(e)} name="email" value={email}/> */}
            <Input  {...register("email", { required: true })} 
        aria-invalid={errors.email ? "true" : "false"} />
        {errors.email?.type === 'required' && <p role="alert">email is required</p>}
        </FormControl>
        <FormControl>
            <InputLabel >Phone</InputLabel>      
            {/* <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone} /> */}
            <Input  {...register("phone", { required: true })} 
        aria-invalid={errors.phone ? "true" : "false"} />  
        {errors.phone?.type === 'required' && <p role="alert">phoneno. is required</p>}  
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={handleSubmit(handleRegistration)}> ADD</Button>
        </FormControl>
    </Container>
    </>
}
export default AddUser