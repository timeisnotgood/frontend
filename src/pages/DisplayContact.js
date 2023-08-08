import React, { useState } from 'react'

const DisplayContact = () => {

    const [server, setserver] = useState([])

    const fetchfun = async () =>{
        const res = await fetch('http://localhost:5000/userdata')
        const data = await res.json()
        .then( data =>{
            setserver(data)
        } )
        console.log(server);
    }
  return (
    <div>
        <button onClick={fetchfun} >Fetch</button>
    </div>
  )
}

export default DisplayContact