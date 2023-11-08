import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [user, setuser] = useState()
  const [loggedin, setloggedin] = useState(false)

  useEffect(()=>{
        function setter(){
        const token = localStorage.getItem("token")
        if(token == null){
          setloggedin(false)
        }else{
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const payload = JSON.parse(atob(base64));
          const currentuser = payload.user
          setuser(currentuser)
          console.log(user);
          setloggedin(true)
        }
        }
        setter()
  },[])

  const logouthandler = () =>{
    localStorage.removeItem('token')
    setloggedin(false)
  }
  

  return (
    <div>
    hello 
    <div>
      {loggedin ? 
      <button onClick={logouthandler}>logout</button> 
      :  
      <Link to={"/"} >login</Link>}
    </div>
    </div>
  )
}

export default Home