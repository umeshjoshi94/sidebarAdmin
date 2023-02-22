import { useState } from "react";
import { useEffect } from "react";
import { FormControl, FormGroup, InputLabel, Input, Button, Typography, styled, TextField } from "@mui/material";
import { getUser, editUser } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Container = styled(FormGroup)`
    width: 50%;
    margin:5% auto 0 auto;
    & > div{margin-top:20px}
`;
// const initialValue = {
//     name: '',
//     username: '',
//     email: '',
//     phone: ''
// }
const EditUser = () => {
    //const [user, setUser] = useState(initialValue);
    const navigate = useNavigate();
    const { id } = useParams();
    // const { name, username, email, phone } = user;


    // const onValueChange=(e)=>{
    //   //console.log(e.target.value)
    //   setUser({...user,[e.target.name]:e.target.value})
    //   console.log(user)
    // }


    // const editUserDetail=async()=>{
    //     await editUser(id,user)
    //     navigate('/all')
    // }
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const handleRegistration = (data) => {
        editUser(data, id)
        navigate('/customers')
    }

    useEffect(() => {
        getUserData()
    }, []);
    const getUserData = async () => {
        let response = await getUser(id);

        //setUser(response.data)
        console.log(response.data)
        setValue("name",
            response.data.name)
        setValue("username",
            response.data.username)
        setValue("email",
            response.data.email)
        setValue("phone",
            response.data.phone)
    }
    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <TextField label="Name" variant="standard" {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"} />
                {errors.name?.type === 'required' && <p role="alert"> name is required</p>}
            </FormControl>
            <FormControl>
                {/* <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/> */}
                <TextField label="Username" variant="standard" {...register("username", { required: true })}
                    aria-invalid={errors.username ? "true" : "false"} />
                {errors.username?.type === 'required' && <p role="alert">Username is required</p>}
            </FormControl>
            <FormControl>

                {/* <Input onChange={(e)=>onValueChange(e)} name="email" value={email}/> */}
                <TextField label="Email" variant="standard"  {...register("email", { required: true })}
                    aria-invalid={errors.email ? "true" : "false"} />
                {errors.email?.type === 'required' && <p role="alert">email is required</p>}
            </FormControl>
            <FormControl>
                {/* <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone} /> */}
                <TextField label="Phone" variant="standard" {...register("phone", { required: true })}
                    aria-invalid={errors.phone ? "true" : "false"} />
                {errors.phone?.type === 'required' && <p role="alert">phoneno. is required</p>}
            </FormControl>
            <FormControl>
                <Button variant='contained' onClick={handleSubmit(handleRegistration)}> Update</Button>
            </FormControl>
        </Container>
    )

}
export default EditUser

