import React, { useState } from 'react'
import "./css/home.css"

const Home = (prop) => {
  
  const [data, setdata] = useState({
    email : "",
    password : ""
  })

  const subhandler = (e) =>{
    e.preventDefault();
    console.log(data);
  }

  const changehan = (e) =>{
    setdata({...data, [e.target.name] : e.target.value})
  }
  return (
    <div className='home' >
      <h3 className='welcome' >Wel<span className='welcomein'>come</span> to Contact Holder App </h3>
      <form onSubmit={subhandler}>
        <label>email</label>
        <input type='text' name='email' onChange={changehan} />
        <label>password</label>
        <input type='text' name='password' onChange={changehan} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Home