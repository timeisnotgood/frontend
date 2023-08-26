import React from 'react'

const Contatclist = ({list}) => {
  
  const deletehandler =async (id)=>{
    console.log(id);
    const data = await fetch('http://localhost:5000/contact', {
      method : "DELETE",
      headers:{
        'Content-type' : 'application/json'
      },
      body:JSON.stringify(id)
    })
  }

  return (
    <div>
      {list.map( name =>{
    return(
      <div key={name._id} >
        <p>
          {name.name}
          <button onClick={()=>deletehandler(name._id)} >Delete</button>
        </p>
      </div>
    )
  } )}
    </div>
  )
}

export default Contatclist