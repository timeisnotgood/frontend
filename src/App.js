import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Contact from "./page/Contact"
import Contatclist from "./page/Contatclist"
import Contactdetail from "./page/Contactdetail"



export default function App() {
  return(
    <div  >
      <h2>Home page</h2> 
      <Routes>
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/contactlist" exact element={<Contatclist/>} />
        <Route path="/contactdetail" exact element={<Contactdetail/>} />
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