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
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUsers';
import EditUser from './Components/UpdateUser';
function App() {
  return (
    <BrowserRouter>
   
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/add' element={<AddUser/>}/>
       <Route path='/all' element={<AllUser/>}/>
       <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
   
    <Navbar>
      <Routes>
      
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/comment" element={< Comment/>} />
        <Route path="/product" element={< Product/>} />
        <Route path="/analytic" element={< Analytics/>} />
        <Route path="/productlist" element={< ProductList/>} />
     </Routes>
     </Navbar>
    </BrowserRouter>
    
  );
}

export default App;
