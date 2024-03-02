import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from './pages/Shop';
import ShopCatagory from './pages/ShopCatagory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Shop/>}></Route>
        <Route path ='/mens' element={<ShopCatagory banner={men_banner} catagory='men'/>}></Route>
        <Route path ='/womens' element={<ShopCatagory banner={women_banner} catagory='women'/>}></Route>
        <Route path ='/kids' element={<ShopCatagory banner={kid_banner} catagory='kid'/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path=':productId' element={<Product/>}></Route>
        <Route path ='/cart' element={<Cart/>}></Route>
        <Route path ='/login' element={<LoginSignup/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App