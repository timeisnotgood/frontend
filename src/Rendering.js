import React, { useEffect, useState } from 'react'

const Rendering = () => {

 
 const [data, setdata] = useState()
 const [term, setterm] = useState()

 useEffect(()=>{
  async function Rendering() {
    const user = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await user.json()
    setdata(json)
   }
   Rendering()
 },[])


 const list = data.map(user =>{
  const {id, name, username} = user
  return(
    <div>
      <p key={id} > {name} </p>
    </div>
  )
 })



  return (
    <div>
    <input type='text' value={term} onChange={(e)=>{setterm(e.target.value)}} />
    {list}
    </div>
  )
}

export default Rendering