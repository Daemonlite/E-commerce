import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ToastContainer} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Clothing from "./categories/Clothing";
import Error from "./components/Error";
import Cart from "./pages/Cart";
import Kitchen from "./categories/Kitchen";
import Beauty from "./categories/Beauty"
function App() {
  return (
    <div>
 
  <BrowserRouter>
  <ToastContainer position='top-center'/>
  <Navbar/> 

  <Routes>
    <Route path="/" element={<Header/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>} />
    <Route path='/clothing' element={<Clothing/>} />
    <Route path="/cart"  element={<Cart/>}/>
    <Route path="/kitchen" element={<Kitchen/>} />
    <Route path="/beauty" element={<Beauty/>} />
    
    <Route path="*" element={<Error/>} />
  </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
