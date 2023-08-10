import React, { useState } from 'react'

const DisplayContact = () => {

    const [server, setserver] = useState([])

    const fetchfun = async () =>{
        const res = await fetch('http://localhost:5000/userdata')
        const data = await res.json()
        .then( data =>{
            setserver(data)
        } )
    }


  return (
    <div>
        <button onClick={fetchfun} >Fetch</button>
        <ul>
        {server.map( field => (
          <li key={field._id} >{field.name}
          <button onClick={() =>{
            setserver(server.filter( item =>
        item._id !== field._id
        ))
          }} >Delete</button>
          </li>
        ) )}
        </ul>
    </div>
  )
}

export default DisplayContact