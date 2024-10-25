import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Login from './pages/page-login';
import AddProduct from './pages/page-add-product';
import EditProduct from './pages/page-edit-product';
import Products from './pages/page-product';
import AddOrder from './pages/page-add-order';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/edit-product/:id' element={<EditProduct/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/add-order' element={<AddOrder/>}/>
        
      </Routes>
    </BrowserRouter>
    <Toaster/>
  </React.StrictMode>
);
