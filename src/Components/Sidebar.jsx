import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
const Sidebar = ({children}) => {
    const menuItem = [
        {
            path: "/",
            name: "dashboard",
            icon: "",
        },
        {
            path: "/about",
            name: "about",
            icon: "",
        },
        {
            path: "/comment",
            name: "comment",
            icon: "",
        },
        {
            path: "/product",
            name: "product",
            icon: "",
        },
        {
            path: "/analytic",
            name: "analytic",
            icon: "",
        },
        {
            path: "/productlist",
            name: "productlist",
            icon: "",
        }
    ]
    return(
    <Box className="sidebar_container">
        <Box className="sidebar">
            <Box className="top_section">
                <h1 className="logo">Logo</h1>
                <Box className="bars"><FaBars />
                </Box>
            </Box>
            {
                menuItem.map((item,index)=>(
                <Box>
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <Box className="icon">{item.icon}</Box>
                        <Box className="link_text">{item.name}</Box>
                    </NavLink>
                </Box>
                ))
            }
        </Box>
        <main>{children}</main>
    </Box>)
}
export default Sidebar;