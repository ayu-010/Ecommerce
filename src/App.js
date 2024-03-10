
import './App.css';
import NavBar from "./components/NavBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route} from 'react-router-dom';
import Home from "./page/Home";
import Cart from "./page/Cart";
import Abouts from "./page/Abouts"
import Contact from "./page/Contact"
// import About from './components/About';

function App() {
  return (
<div>
                                               
   <div className=" bg-slate-900 ">
    <NavBar></NavBar>
    
   </div>


<Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/cart" element={<Cart/>} />
 <Route path="/Abouts" element={<Abouts/>} /> 
 <Route path="/Contact" element={<Contact/>} /> 
 
</Routes>

</div>)
};

export default App;
