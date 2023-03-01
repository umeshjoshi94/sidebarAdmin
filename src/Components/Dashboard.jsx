import { BrowserRouter,Routes,Route} from "react-router-dom";
import Customers from '../pages/Customers';
import Product from '../pages/Product';
import Comment from '../pages/Comment';
import About from '../pages/About';
import Analytics from '../pages/Analytic';
import ProductList from '../pages/ProductList';
import Navbar from "./navbar";
const Dashboard=()=>{
    return<> <Navbar>
    <Route>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/comment" element={< Comment/>} />
      <Route path="/product" element={< Product/>} />
      <Route path="/analytic" element={< Analytics/>} />
      <Route path="/productlist" element={< ProductList/>} />
      </Route>   </Navbar>
    </>
}

export default Dashboard