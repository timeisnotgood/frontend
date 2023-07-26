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
        setdata(...data, detail)
        setdetail({username : "", email:"", password:""})
        localStorage.setItem("Reg detail", data)
    }

    console.log(data);

  return (
    <div>
        <form onSubmit={subhandler} >
            <lable>Username</lable>
            <input type='text' value={detail.username} name='username' onChange={(e)=>setdetail({...detail, [e.target.name] : e.target.value})}   />
            <lable>email</lable>
            <input type='text' value={detail.email} name='email' onChange={(e)=>setdetail({...detail, [e.target.name] : e.target.value})}   />
            <lable>Username</lable>
            <input type='text' value={detail.password} name='password' onChange={(e)=>setdetail({...detail, [e.target.name] : e.target.value})}   />
            <button>Submit</button>
        </form>
        {JSON.stringify(data)}
    </div>
  )
}

export default Context