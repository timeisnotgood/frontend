import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import {Rendering} from './Rendering';
// import store from './Redux/store'
// import Header from './containers/Header'
// import Productdetail from './containers/productdetail';
// import ProductList from './containers/productList';
import LoginButton from './auth/LoginButton';
import LogoutButton from './auth/LogoutButton';
import { User, useAuth0 } from '@auth0/auth0-react';
import Clickincre from './claccomp/Clickincre';
import Hoverinc from './claccomp/Hoverinc';




export default function App() {

  return (
    <div>
      <Rendering func={(count, incre) => 
      <Clickincre count={count} incre={incre} />} />

      <Rendering func={(count, incre) => 
      <Hoverinc count={count} incre={incre} />} />
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