import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Productdetails from "../Home/Productdetails/Productdetails";
import Home from "../Home/HomePage/Home";
import Catagorey from "../category/Category";
import Order from "../Orders/Order";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Detailscart from "../Home/Productdetails/Detailscart";
import Login from "../user/login/login";
import Register from "../user/Register/Register";
const Nav = () => {
    
const [addcart,setaddcart]=useState([]);
    return (
        <>
        <Router>
        <ToastContainer theme='dark' position='top-center' />
                <Routes>
                    <Route index path="/" element={<Login />} />
                    <Route path="items" >
                        <Route path="home" element={<Home addcart={addcart} setaddcart={setaddcart} />} />
                        <Route path="search" element={<Home />} />
                        <Route path="Catagorey" element={<Catagorey />} />
                        <Route path="Orders" element={<Order/>} />
                        <Route path="Addcart" element={<Detailscart  addcart={addcart} setaddcart={setaddcart}/>}/>
                        <Route path="FaQ" element="" />
                        <Route path="login" element={<Login/>} />
                        <Route path="register" element={<Register/>} />
                        <Route path="products/:id" element={<Productdetails addcart={addcart} setaddcart={setaddcart}/>}/>
                       
                    </Route>
                    <Route path="*" element={<div>Not Found</div>} />
                </Routes> 
            </Router>
        </>
    );
}

export default Nav;