import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Singleproduct from "./Singleproduct"
import Header from "./components/Header";
import Errorpage from "./Errorpage";
import Navbar from "./components/Navbar";
import './Styles.css'
import Footer from "./Footer";
import AddToCart from "./components/AddToCart";
import Cart from "./Cart";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
  
   <Router>
    <Header/>
    <Routes>
    
      <Route path="/" element={<Home />}/>
      <Route path="Navbar" element={<Navbar/>}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Header" element={<Header />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Singleproduct/:id" element={<Singleproduct />}/>
      <Route path="*" element={<Errorpage/>}/>
      <Route path="/AddToCart" element={<AddToCart/>}/>

      <Route path="/Cart" element={<Cart/>}/>
      
    </Routes>
    <Footer/>
   </Router>
  
  );
}

export default App;
