import React from 'react';
import Login from './Login/index';
import Products from './Product/index';
import ProductDetails from './ProductDetails/index';
import Forms from './Forms/index';
import Navbar from './Navbar/nav';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/home" element={<Products />} />
          <Route path="/about" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/add" element={<Forms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;