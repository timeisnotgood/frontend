import React, { useState } from 'react'
import './css/register.css'

const Register = props => {

  const initialerrorstate = {
    name : {required : false},
    email : {required : false},
    password :{required : false},
    customerror : null
  }
  const [error, seterror] = useState(initialerrorstate)
  const [loading, setloding] = useState(false)
  const [inputs, setinputs] = useState({
    name : "",
    email : "",
    password : ""
  })

  const submithandler = (e) =>{
    e.preventDefault();
    let errors = initialerrorstate
    let loaderror = false

    if(inputs.name == ""){
       errors.name.required = true
       loaderror = true
    }
     if(inputs.email == ""){

       errors.email.required = true
       loaderror = true

    }
     if(inputs.password == ""){

       errors.password.required = true
       loaderror = true

    }

    if(!loaderror){
      setloding(true)
    }
     seterror(errors)
    console.log(errors);
  }
  const inputhandler = (e) =>{
    setinputs({...inputs, [e.target.name] : e.target.value})
  }

  return (
    <div className="register-block">
      <div className="container">
        <div className="row ">
            <div className="col register-sec">
              <h2 className="text-center">Register Now</h2>
              <form className="register-form" action="" onSubmit={submithandler} >
                  <div className="form-group">
                    <label  className="text-uppercase">Name</label>
      
                    <input type="text" className="form-control" name="name" onChange={inputhandler} />
                    {error.name.required?
                    <span className="text-danger" >
                        Name is required.
                    </span>:null
                    }
                  </div>
                  <div className="form-group">
                    <label  className="text-uppercase">Email</label>
      
                    <input type="text"  className="form-control" name="email" onChange={inputhandler}  />
                    {error.email.required ?
                    <span className="text-danger" >
                        Email is required.
                    </span> : null
                    }
                  </div>
                  <div className="form-group">
                      <label  className="text-uppercase">Password</label>
                      <input  className="form-control" type="password"  name="password" onChange={inputhandler} />
                      {error.password.required ?
                      <span className="text-danger" >
                          Password is required.
                      </span>: null
                      }
                  </div>
                  <div className="form-group">
                      {error.customerror ?
                          <span className="text-danger" >
                            <p>{error.customerror}</p>
                          </span>:null
                      }
                      <div  className="text-center">
                        {loading ?
                        <div className="spinner-border text-primary " role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                          :null
                        }
                      </div>
                      <input type="submit" className="btn btn-login float-right" disabled={loading}  value="Register"   />
                  </div>
                  <div className="clearfix"></div>
                  <div className="form-group">
                    Already have account ? Please <a href="javascript:void(0);">Login</a>
                  </div>
              </form>
            </div>
        </div>
      </div>
  </div>
  )
}


export default Register