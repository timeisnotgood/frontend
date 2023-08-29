import React, { useEffect, useState } from 'react'

const Contatclist = () => {
  
  const [list, setlist] = useState([])

 useEffect(()=>{
  const datas = async ()=>{
    const data = await fetch('http://127.0.0.1:5000/findcontact', {
      method : "GET",
      headers:{
        'Content-Type': 'application/json', // Specify content type
    },
    })
    const res = await data.json()
    setlist(res.data)
    console.log(res);
  }
  datas();
 },[])


 const dele = async(a)=>{
  const data = await fetch('http://127.0.0.1:5000/deletecontact', {
    method : "DELETE",
    headers:{
      'Content-Type': 'application/json', // Specify content type
    },
    body:JSON.stringify({id:a._id})
  })

  const res = await data.json()
  console.log(res.data);
  setlist(res.data)
}



 const data = list.map( data =>{
  return(
    <div key={data._id} >
      <p>{data.name}</p>
      <button>Edit</button>
      <button onClick={()=>dele(data._id)} >Delete</button> 
    </div>
  )
 } )

  return (
    <div>
      {data}
    </div>
  )
}

export default Contatclist


