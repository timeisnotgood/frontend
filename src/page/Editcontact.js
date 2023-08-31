import React, { useState } from 'react'
import { useParams } from 'react-router-dom';


const Editcontact = () => {

  const { id } = useParams()
  
  const [edit, setedit] = useState({
    name : "",
    email : "",
    number : ""
  }) 

  // Change Handler
  const handler = (e) =>{
    setedit({...edit, [e.target.name] : e.target.value})
  }

  //Submit Handler
  const subhandler = async (e) =>{
    e.preventDefault();
    const data = await fetch(`http://127.0.0.1:5000/updatecontact/${id}`,{
      method:"PUT",
      headers:{
        'Content-Type' : "application/json"
      },
      body:JSON.stringify(edit)
    })
    const res = await data.json()
    console.log(res);
  }
  
  return (
    <div>
      <form onSubmit={subhandler} >
        <input type='text' placeholder='name' name='name' onChange={handler} />
        <input type='text' placeholder='email' name='email' onChange={handler} />
        <input type='text' placeholder='number' name='number' onChange={handler} />
        <button>Submit Changes</button>
      </form>
    </div>
  )
}

export default Editcontact 