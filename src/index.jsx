import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Login from './pages/page-login';
import AddProduct from './pages/page-add-product';
import EditProduct from './pages/page-edit-product';
import Products from './pages/page-product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Profile from './pages/page-profile';
import Order from './pages/page-order';
=======
>>>>>>> 7d9f73d7a68de79050819f32618094b866ebfae8
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/edit-product/:id' element={<EditProduct/>}/>
<<<<<<< HEAD
        <Route path='products' element={<Products/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/page-order' element={<Order/>}/>
=======
        <Route path='/products' element={<Products/>}/>
>>>>>>> 7d9f73d7a68de79050819f32618094b866ebfae8
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
