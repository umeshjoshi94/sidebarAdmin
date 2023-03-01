import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Customers from './pages/Customers';
import Product from './pages/Product';
import Comment from './pages/Comment';
import About from './pages/About';
import Analytics from './pages/Analytic';
import ProductList from './pages/ProductList';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/navbar';
import Nav from './Components/Nav';
import Home from './pages/Home';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUsers';
import EditUser from './Components/UpdateUser';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/add' element={<AddUser/>}/>
       <Route path='/all' element={<AllUser/>}/>
       <Route path='/edit/:id' element={<EditUser/>}/>
       <Route path='/dashboard' element={<Dashboard/>}>
       
       </Route>
      </Routes>
   
    </BrowserRouter>
    
  );
}

export default App;
