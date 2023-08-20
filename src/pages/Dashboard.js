import React, { useEffect } from 'react'
import  Jwt  from 'jsonwebtoken'
import { unstable_HistoryRouter } from 'react-router-dom'

const Dashboard = () => {

    async function popularQuote(){
        
    } 

    useEffect(()=>{
        const token = localStorage.getItem("accesstoken")
        if(token){
            const  user = Jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                window.location.href = '/login'
            }
        }else{
            popularQuote()
        }
    }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard