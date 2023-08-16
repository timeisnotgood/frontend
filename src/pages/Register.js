import React, { useState }  from 'react'

const Register = () => {

    const [data, setdata] = useState({
        name : "",
        email : "",
        password : ""
      })
    
      //Input Handler
      const datahandler = (e) =>{
        setdata({...data, [e.target.name]:e.target.value})
      }
    
      // Submit Handler
      const subhandler = async (e) =>{
    
        e.preventDefault()
        console.log(data);
    
        const response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify(data)
        })


        const da = response.json()
        da.then( data =>{
          console.log(data);
        })

        setdata({name : "", email:"", password:""})

    
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