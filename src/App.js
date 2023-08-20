import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Contacts from "./pages/Contacts"
import Dashboard from "./pages/Dashboard"

export default function App() {
  return(
    <div  >
      <h2>Home page</h2> 
      <Link to={'/register'} >register</Link>
      <Link to={'/login'} >Login</Link>
      <Link to={'/'} >home</Link>
        <Routes>
          <Route path="/"  />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/contacts" exact element={<Contacts/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
        </Routes>
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