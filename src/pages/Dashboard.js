import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode";

const Dashboard = () => {

    async function popularQuote(){
        const req = await fetch('http://localhost:5000/contacts', {
            headers:{
                'X-Access-Token' : localStorage.getItem('accesstoken')
            }
        })

        const data = await req.json()
        console.log(data);
    } 

    useEffect(()=>{
        const token = localStorage.getItem("accesstoken")
        if(token){
            const  user = jwt_decode(token)
            if(!user){
                localStorage.removeItem('token')
                window.location.href = '/login'
            }
            popularQuote()
        }
    }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard