import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const [user, setuser] = useState()
  const [loggedin, setloggedin] = useState(false)

  useEffect(()=>{
        async function setter(){
        const token = await localStorage.getItem("token")
        console.log(token);
        if(token == null){
          setloggedin(false)
        }
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const payload = JSON.parse(atob(base64));
          const currentuser = payload.user
          console.log(currentuser);
          setuser(currentuser)
          setloggedin(true)
        }
        setter();
  },[]);

  const logouthandler = () =>{
    localStorage.removeItem('token')
    setloggedin(false)
    navigate('/')
  }
  
  console.log(user);


  return (
    <div>
    hello {user ? user.name : null}
    <div>
      {loggedin ? 
      <button onClick={logouthandler}>logout</button> 
      :  
      <Link to={"/"} >
        <button>login</button>
      </Link>}
    </div>
    </div>
  )
}

export default Home