import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
export default function App() {
  return(
    <div>
      <h2>Home page</h2>
      {/* <Link to={"/Login"}>
        <button>Login</button>
      </Link> */}
      
      <BrowserRouter>
        <Routes>
          <Route path="/Register" exact element={<Register/>} />
          <Route path="/Login" exact element={<Login/>} />
        </Routes>
      </BrowserRouter>
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