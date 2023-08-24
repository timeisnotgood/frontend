import React, { useState } from 'react'

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
        const res = await fetch('http://localhost:5000/contact', {
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
    <div>
        <form onSubmit={subhandler} >
            <input type='text' placeholder='name' name='name' onChange={handler} />
            <input type='text' placeholder='email' name='email' onChange={handler} />
            <input type='text' placeholder='number' name='number' onChange={handler} />
            <button>Submit</button>
        </form>
    </div>
  )

}

export default Addcontacts