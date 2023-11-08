import { useEffect } from "react";
import Rout from "./login/Route"
import Contact from "./page/Contact"

export default function App() {


  function add(a, b){
    console.log(a+b);
  }


  setInterval(() => {
    console.log("useEffect:",5*5);
    
  }, 2000);

  const sub = (a,b) =>{
    console.log(a-b);
  }

  add(10,25)
  sub(11,45)

  

  return(
    // <Rout/>
    <div>
      synchronus vs Asynchronus
    </div>
  )
}













