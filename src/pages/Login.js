import React from 'react'
import './css/login.css'

const Login = () => {
  return (
    <section class="login-block">
    <div class="container">
        <div class="row ">
            <div class="col login-sec">
                <h2 class="text-center">Login Now</h2>
                <form class="login-form" action="">
                <div class="form-group">
                    <label for="exampleInputEmail1" class="text-uppercase">Email</label>
                    <input type="email"  class="form-control" name="email"  id="" placeholder="email"  />
                    <span class="text-danger" >
                        Email is required.
                    </span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="text-uppercase">Password</label>
                    <input  class="form-control" type="password"  name="password" placeholder="password" id="" />
                    <span class="text-danger" >
                        Password is required.
                    </span>
                </div>
                <div class="form-group">
                    <div  class="text-center">
                        <div class="spinner-border text-primary " role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <span class="text-danger" >
                    <p>Custom Error Message!</p>
                    </span>
                    <input  type="submit" class="btn btn-login float-right"  value="Login" />
                </div>
                <div class="clearfix"></div>
                <div class="form-group">
                Create new account ? Please <a  href="javascript:void(0);">Register</a>
                </div>
                </form>
            </div>
        </div>
    </div>
</section>
  )
}

export default Login