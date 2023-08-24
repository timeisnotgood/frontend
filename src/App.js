import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Contact from "./page/Contact"
import Contatclist from "./page/Contatclist"
import Contactdetail from "./page/Contactdetail"
import { useContext, useState } from "react"



export default function App() {
  const [listdata, setlistdata] = useState([])
  return(
    <div  >
    <Contact/>
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