import React, { useState }  from 'react'
import "./css/login.css"

const Login = () => {

    const [data, setdata] = useState({ email : "", password : ""})
    
      const datahandler = (e) =>{
        setdata({...data, [e.target.name]:e.target.value})
      }
    

// Submit Handler

      const subhandler = async (e) =>{
    
        e.preventDefault()
        setdata({email:"", password:""})
        console.log(data);
    
        const res = await fetch('http://localhost:5000/userdata',{
          method: 'POST',
          headers :{
            'Content-type' : 'application/json'
          },
          body:JSON.stringify(data)
        })
          console.log(res.json());
      }


    

      return (
        <div className="main" >
          <h4>Login Here</h4>
          <form className="form" onSubmit={subhandler} >
            <input type="text" value={data.email} name="email" placeholder="Email" onChange={datahandler} />
            <input type="text" value={data.password} name="password" placeholder="Password" onChange={datahandler} />
            <button>Submit</button>
          </form>
        </div>
      )
}

export default Login