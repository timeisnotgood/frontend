import React, { useState }  from 'react'

const Register = () => {

    const [data, setdata] = useState({
        name : "",
        email : "",
        password : ""
      })
      const [info, setinfo] = useState([])
    
      const datahandler = (e) =>{
        setdata({...data, [e.target.name]:e.target.value})
      }
    
      const subhandler = async (e) =>{
    
        e.preventDefault()
        setinfo([...info, data])
        setdata({name : "", email:"", password:""})
    
    
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          // body: JSON.stringify(info)
        })


        const da = response.json()
        da.then( data =>{
          console.log(data);
        })
    
      }
    
    
      return (
        <div className="main" >
          <h4>Register Here</h4>
          <form className="form" onSubmit={subhandler} >
            <input type="text" value={data.name} name="name" placeholder="Username" onChange={datahandler} />
            <input type="text" value={data.email} name="email" placeholder="Email" onChange={datahandler} />
            <input type="text" value={data.password} name="password" placeholder="Password" onChange={datahandler} />
            <button>Submit</button>
          </form>
        </div>
      )
}

export default Register