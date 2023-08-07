import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = () => {

    const [todo, settodo] = useState({
        name : "",
        email : ""
    })

    const [data, setdata] = useState([])

    const handler = (e) => {
        settodo( (prev) =>{
            return  {...prev, [e.target.name]:e.target.value} })
        }
    


    const subhandler = (e) =>{
        e.preventDefault()
        // setdata([...data, todo])
        // settodo("")
        console.log(todo);
    }



    return(
        <div>
            <form onSubmit={subhandler} >
                <input type='text' placeholder='Name' name='name' value={todo.name}  onChange={handler} />
                <input type='text' placeholder='Email' name='email' value={todo.email}  onChange={handler} />
                <button>Submit</button>
            </form>
 
        </div>
    )
}

export default Context