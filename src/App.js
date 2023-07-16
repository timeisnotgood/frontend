import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Rendering from './Rendering';
// import store from './Redux/store'
// import Header from './containers/Header'
// import Productdetail from './containers/productdetail';
// import ProductList from './containers/productList';



export default function App() {


  return (
    <div>
      <Rendering/>
    </div>
  )
  
}






















// <div>
//       <BrowserRouter>
//       <Header/>
//         <Routes>
//           <Route path='/product/:productId' exact element={<Productdetail/>} />
//           <Route path='/list' exact element={<ProductList/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>