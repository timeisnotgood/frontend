import React, { useState } from 'react'
import "./css/addcontact.css"

const Addcontacts = ({getdata}) => {
    const [info, setinfo] = useState({
        name :"",
        email:"",
        number : ""
    })

    const [serverdata, setserverdata] = useState([])

    // Input Handler
    const handler =(e)=>{
        setinfo({...info,[e.target.name]:e.target.value})
    }

    
    // Form Handler
    const subhandler =async(e)=>{
        e.preventDefault()
        const res = await fetch('http://127.0.0.1:5000/addcontact', {
            method :"POST",
            headers :{
                'Content-type' : 'application/json'
            },
            body:JSON.stringify(info)
        })
        const data = await res.json()
        // setserverdata([...serverdata, data.data])
        console.log(data.data);
        getdata(data.data)
        setinfo({name : "", email:"", number:""})
    }

  return (
    <div className='addform' >
        <form onSubmit={subhandler} className='form' >
            <input type='text' placeholder='name' className='input' name='name' onChange={handler} />
            <input type='text' placeholder='email' className='input' name='email' onChange={handler} />
            <input type='text' placeholder='number' className='input' name='number' onChange={handler} />
            <button className='btn' >Submit</button>
        </form>
    </div>
  )

}

export default Addcontacts