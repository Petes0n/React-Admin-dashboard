import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import "./styles/global.scss";
import Config from "./pages/config/Config";
import AddProducts from "./pages/addproducts/AddProducts";
import Navbar from "./components/navbar/Navbar";
import Buyers from "./pages/buyers/Buyers";
import AdminForm from "./pages/adminForm/adminform";
import Test from "./pages/config/Test";
import Reconciliation from "./pages/Reconciliation/Reconciliation";
import Report from "./pages/report/Report";
function App() {
  return (
    <div className="main">
       < div className='container'></div>
       <div className='contentContainer'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navbar><Home /></Navbar> }/>
        <Route path="/config" element={ <Navbar><Config /></Navbar> }/>
        <Route path="/addProduct" element={ <Navbar><AddProducts /></Navbar> }/>
        <Route path="/buyers" element={ <Navbar><Buyers /></Navbar> }/>
        {/* <Route path="/admin" element={ <Navbar><AdminForm /></Navbar> }/> */}
        <Route path="/reconciliation" element={ <Navbar><Reconciliation /></Navbar> }/>
        <Route path="/reports" element={ <Navbar><Report /></Navbar> }/>
        
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
