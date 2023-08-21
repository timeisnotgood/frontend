import React, { useState }  from 'react'
import "./css/login.css"


const Login = () => {

    const [data, setdata] = useState({ email : "", password : ""})
    const [loggedin, setloggedin] = useState(
      {
        status : "",
        name : ""
      }
    )


// Input Handler
      const datahandler = (e) =>{
        setdata({...data, [e.target.name]:e.target.value})
      }
    

// Submit Handler

      const subhandler = async (e) =>{
    
        e.preventDefault()
        setdata({email:"", password:""})
    
        const res = await fetch('http://localhost:5000/login',{
          method: 'POST',
          headers :{
            'Content-type' : 'application/json'
          },
          body:JSON.stringify(data)
        })
          const datas = res.json()
          .then( da =>{
            console.log(da);
            if(da.accesstoken){
              localStorage.setItem("accesstoken", JSON.stringify(da.accesstoken))
              alert("Login successful")
              window.location.href="/contacts"
            }else{
              alert("Pleace Login")
            }
            // setloggedin({status : da.status, name : da.name})
          } )
      }

      
      return (
        <div className="main" >
         {loggedin.status ? <p>Welcome {loggedin.name} 😊😊</p> :
         <div>
          <h4>Login Here</h4>
          <form className="form" onSubmit={subhandler} >
            <input type="text" value={data.email} name="email" placeholder="Email" onChange={datahandler} />
            <input type="text" value={data.password} name="password" placeholder="Password" onChange={datahandler} />
            <button>Submit</button>
          </form>
          </div>
          }
        </div>
      )
}

export default Login