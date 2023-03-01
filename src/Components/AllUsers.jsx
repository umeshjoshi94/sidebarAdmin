import { Table, TableBody, TableCell, TableHead, TableRow,styled, Button, Pagination, Typography, Stack, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers,deleteUser } from "../Service/api";
import Paginationn from "./Pagination";
import SearchBar from "./Searchbar";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background:#f0ffff;
        color: #000;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUser=()=>{
    const [users,setUsers]=useState([]);
    const [page, setPage] = useState(1);
    const [totalList, setTotalList] = useState();
    const navigate = useNavigate()
    //const ITEM_LIMIT = 10
    

    useEffect(() => {
        getUsersDetail()
    }, []);


    const getUsersDetail = async () => {
        let response = await getUsers();
        setUsers(response.data)
        setTotalList(response.data.length)
        console.log('-----------------------------',response.data.length)
    }


    const deleteUserData = async (id)=>{
        await deleteUser(id);
        getUsersDetail();
    }


    const handleChange = (event, value) => {
      setPage(value);
    };


    return<>
    <Box>
    <div style={{ display: "flex", justifyContent: "end", justifyContent:"space-between"}}>
        <SearchBar />
        <Button variant="outlined" sx={{fontSize: 20}} onClick={() => navigate("/add")}>
          Add User
        </Button>
        </div>
    <StyledTable>
     <TableHead>
        <THead>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>UserName</TableCell>
        <TableCell>Email</TableCell>  
        <TableCell>Phone</TableCell>
        <TableCell>Action</TableCell>
        </THead>
      </TableHead>
      <TableBody>
      {users.map((user,index) => (
         <TRow key={index}>
         <TableCell>{user.id}</TableCell>
         <TableCell>{user.name}</TableCell>
         <TableCell>{user.username}</TableCell>
         <TableCell>{user.email}</TableCell>  
         <TableCell>{user.phone}</TableCell>
         <TableCell>
            <Button color='primary' variant='contained' style={{marginRight:10}} onClick={()=> navigate(`/edit/${user.id}`)}>Edit</Button>
            <Button color='secondary' variant='contained' onClick={()=>deleteUserData(user.id)}>Delete</Button>
         </TableCell>
         </TRow>
      ))}
      </TableBody>
   </StyledTable>
  <Paginationn/>
  </Box>
 </>
}
export default AllUser;
