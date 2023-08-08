import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Contacts from "./pages/Contacts"

export default function App() {
  return(
    <div>
      <h2>Home page</h2> 
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact element={<Register/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/contacts" exact element={<Contacts/>} />
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