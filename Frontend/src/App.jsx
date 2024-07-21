import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Component/main_Component/Navbar';
import Homepage from './Component/HeroComopnent/Homepage';
import Men from './Component/HeroComopnent/Men';
import Women from './Component/HeroComopnent/Women_hero';
import Kids from './Component/HeroComopnent/kids';
import Electronics from './Component/HeroComopnent/Electronics';
import ProductDetails from './Component/ReuseComponent/productDeatils';
import ElectronicDetails from './Component/ReuseComponent/electronicProduct';
import Cart from './Component/HeroComopnent/Cart';
import LoginAccount from './Component/ReuseComponent/Login';
import Signup from './Component/ReuseComponent/Signup';

export default function App() {
  const location = useLocation();

  const renderNavbar = location.pathname !== '/login' && location.pathname !== "/signup";

  

  return (
    <div className='h-screen overflow-hidden'>
      {renderNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/electronic" element={<Electronics />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginAccount />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productDetails/:Id" element={<ProductDetails />} />
        <Route path="/electronicDetails/:Id" element={<ElectronicDetails />} />
      </Routes>
      
    </div>

    
    
  );
}
