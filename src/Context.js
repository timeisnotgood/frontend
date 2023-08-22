import React, { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid"

const Context = () => {

    const [data, setdata] = useState("")
    const [todos, settodos] = useState([])

    const subhandler =(e)=>{
        e.preventDefault()
        settodos([...todos,  data])
        console.log(todos);
    }

    const checked = todos.map( todo =>{
        return(
            <div key={uuidv4()} >
                <p>{todo}</p>
            </div>
        )
    } )


    return(
        <div>
        <form onSubmit={subhandler} >
            <input type='text' onChange={(e)=>setdata(e.target.value)} />
            <button>Submit</button>
        </form>
        {checked}
        </div>
    )
}

export default Context