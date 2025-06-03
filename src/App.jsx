import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import DeliveryJob from "./pages/DeliveryJob/DeliveryJob";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import AllItems from "./pages/All Items/allItems";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import NotFound from "./pages/NotFound/NotFound";
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
  const [shoLogin, setShowLogin]=useState(false)
  return (
    <>
    {shoLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/all-items" element={<AllItems/>} />
          <Route path="/delivery" element={<DeliveryJob/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/myorders" element={<MyOrders/>} />
         <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
