import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login';
import Product from './Product';
import ProductDetail from './Product/ProductDetail'
import Navbar from './Navbar';


function App() {
  return (
    <div>
      <Login/>
      <Navbar/>
     <BrowserRouter>
      <Routes>
      
        <Route path="/Product/:Id" element={<Product />}></Route>
        <Route path="/ProductDetail" element={<ProductDetail />}></Route>
        <Route path="/Product" element={<Product />}></Route>

  

      </Routes>
    </BrowserRouter>
    </div>
  );
}




export default App;
