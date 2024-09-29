import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Login from './pages/page-login';
import AddProduct from './pages/page-add-product';
import EditProduct from './pages/page-edit-product';
import Products from './pages/page-product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='add-product' element={<AddProduct/>}/>
        <Route path='edit-product' element={<EditProduct/>}/>
        <Route path='products' element={<Products/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
