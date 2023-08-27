import React, { useEffect, useState } from 'react'

const Contatclist = () => {
  
  const [list, setlist] = useState([])

 useEffect(async()=>{
  const data = await fetch('http://127.0.0.1:5000/findcontact', {
      method : "GET",
      headers:{
        'Content-Type': 'application/json', // Specify content type
    },
    })
    const res = await data.json()
    setlist([...list, res])
 },[])
 
 console.log(list);
  return (
    <div>
    hai
    </div>
  )
}

export default Contatclist