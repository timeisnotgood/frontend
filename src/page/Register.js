import React, { useState } from 'react'

const Register = () => {

    const [data, setdata] = useState({
        username : "",
        email : "",
        password : ''
    })

    const subhandler = (e) =>{
        e.preventDefault();
        console.log(data);
    }

    const changehandler = (e) =>{
        setdata({...data , [e.target.name] : e.target.value})
    }
  return (
    <div>
        <h3>Register</h3>
        <form onSubmit={subhandler} >
            
            <input type='text' placeholder='username' name='username' onChange={changehandler} />
            
            <input type='text' placeholder='email' name='email' onChange={changehandler} />
            
            <input type='text' placeholder='password' name='password' onChange={changehandler} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Register