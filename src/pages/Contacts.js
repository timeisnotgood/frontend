import React, { useState } from 'react'
import DisplayContact from './DisplayContact'

const Contacts = () => {

    const [data, setdata] = useState({
        name : "",
        age : "",
        occupation : ""
    })

    const handler =(e) =>{
        setdata( prev =>{
            return { ...prev, [e.target.name] : e.target.value}
        } )
    }
    const subhandler = async (e) =>{
        e.preventDefault();

        const res = await fetch('http://localhost:5000/contacts', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json" 
            },
            body:JSON.stringify(data)
        })

        const da = await res.json()
        console.log(da);
    }
  return (
    <div>
        <form onSubmit={subhandler} >
            <input type='text' placeholder='Name' name='name' value={data.name} onChange={handler} />
            <input type='text' placeholder='Age' name='age' value={data.age} onChange={handler} />
            <input type='text' placeholder='Occupation' name='occupation' value={data.occupation} onChange={handler} />
            <button>Submit</button>
        </form>     
        <DisplayContact/>   
    </div>
  )
}

export default Contacts