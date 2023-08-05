import React, { useState }  from 'react'

const Login = () => {

    const [data, setdata] = useState({
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
        setdata({email:"", password:""})
    
    
        const response = await fetch('http://localhost:5000/second', {
          method: 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify(info)
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
            <input type="text" value={data.email} name="email" placeholder="Email" onChange={datahandler} />
            <input type="text" value={data.password} name="password" placeholder="Password" onChange={datahandler} />
            <button>Submit</button>
          </form>
        </div>
      )
}

export default Login