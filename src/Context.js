import React, { createContext, useContext, useState } from 'react'

const Context = () => {

    const [detail, setdetail] = useState({
        username : "",
        email : "",
        password : ""
    })
    const [data, setdata] = useState([])

    const subhandler =(e)=>{
        e.preventDefault()
        setdata([detail, ...data])
        setdetail({username : " ", email:" ", password:" "})

        localStorage.setItem("Reg detail", JSON.stringify(data))
        console.log(data);

    }


    const statehandler = (e) =>{
        setdetail({...detail, [e.target.name]:e.target.value})
    }

  return (
    <div>
        <form onSubmit={subhandler} >
            <lable>Username</lable>
            <input type='text' value={detail.username} name='username' onChange={statehandler}   />
            <lable>email</lable>
            <input type='text' value={detail.email} name='email' onChange={statehandler}   />
            <lable>password</lable>
            <input type='text' value={detail.password} name='password' onChange={statehandler}   />
            <button>Submit</button>
        </form>
        {JSON.stringify(data)}
    </div>
  )
}

export default Context