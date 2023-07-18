import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Rendering from './Rendering';
// import store from './Redux/store'
// import Header from './containers/Header'
// import Productdetail from './containers/productdetail';
// import ProductList from './containers/productList';
import LoginButton from './auth/LoginButton';
import LogoutButton from './auth/LogoutButton';
import { User, useAuth0 } from '@auth0/auth0-react';





export default function App() {

  const newe = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("Uumbu")
    }, 1000)
  })

  const nn = async () =>{
    const data = await newe
    console.log(data);
  }

  nn()

  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

  return (
    <div>
    <button onClick={loginWithPopup} >Login wiht popup</button>
    <button onClick={loginWithRedirect} >Login wiht Redirect</button>
    <button onClick={logout} >Logout</button>

    <p> user is  {isAuthenticated ? " logged in " : "not logged in"}</p>
    <p>{JSON.stringify(user, null, 2)}</p>
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