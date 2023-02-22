//import styled from '@emotion/styled';
import { Toolbar,AppBar,Typography,styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;
const Header = styled(AppBar)`
    background: #111111;
`;
    
const Nav =()=>{
    return<> 
    <Header position="static">
        <Toolbar>
        <Tabs to='/'>Home</Tabs>
        <Tabs to='all'>AllUser</Tabs>
        <Tabs to='add'>AddUser</Tabs>
        </Toolbar>
    </Header>

    </>
}

export default Nav;