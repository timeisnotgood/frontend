import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = () => {

    const [data, setdata] = useState({
        name : "",
        email : ""
    })

    const handler =(e) =>{
        setdata( prev =>{
            return { ...prev, [e.target.name] : e.target.value }
        } )
    }

    const subhandler =(e) =>{
        e.preventDefault();
        console.log(data);
    }

    return(
        <div>
            <form onSubmit={subhandler} >
                <input type='text' placeholder='Name' name='name' value={data.name} onChange={handler}  />
                <input type='text' placeholder='Email' name='email' value={data.email} onChange={handler} />
                <button>Submit</button>
            </form>
 
        </div>
    )
}

export default Context