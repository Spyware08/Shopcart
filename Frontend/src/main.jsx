import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './Component/main_Component/Navbar';
import { CartProvider } from './Component/CartFile/cart_context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>   
    <CartProvider >
      <App />
    </CartProvider>
  </BrowserRouter>


);
