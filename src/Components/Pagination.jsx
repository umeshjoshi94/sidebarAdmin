import {
    Box,
    CssBaseline,
    Typography,
    Card,
    CardContent,
    Grid,
    Container,
    Pagination
  } from "@mui/material";
  
  import { useState, useEffect } from "react";
  //import axios from "axios";
  
  function Paginationn() {
    //const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    // const loadPosts = async () => {
    //   const res = await axios.get(`http://localhost:3001/posts?_page=${page}`);
    //   setPosts(res.data);
    // };
    useEffect(() => {
     console.log(page)
    }, [page]);
  
    return (
      <div className="App">
        <CssBaseline />
        <Container component={Box} py={3}>
          <Grid container spacing={2}>
           
          </Grid>
          <Box py={3} display="flex" justifyContent="center">
          <Typography>Page {page}</Typography>
            <Pagination
              count={10}
              page={page}
              color="secondary"
              variant="outlined"
              onChange={(e, value) => setPage(value)}
            />
          </Box>
        </Container>
      </div>
    );
  }
  
  export default Paginationn;