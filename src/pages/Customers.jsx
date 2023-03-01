import AllUser from "../Components/AllUsers";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Nav from "../Components/Nav";
import React from "react";
import SearchbBar from "../Components/Searchbar";

const Customers = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
     
        <AllUser />
    </React.Fragment>
  );
};
export default Customers;
