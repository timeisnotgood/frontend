import React, { useContext, useState } from 'react'
import Addcontacts from './Addcontacts'
import Contatclist from './Contatclist'
import Contactdetail from './Contactdetail'
import { Route, Routes } from 'react-router-dom'

const Contact = () => {

    const [global, setglobal] = useState([])
    const getdata = (contact)=>{
        setglobal([...global, contact])
    }
    console.log(global);
    return(
        <div>
        hellow
        <Routes>
            <Route path='/addcontacts' exact Component={()=>(<Addcontacts getdata={getdata} />)} />
            
        </Routes>
        <Contatclist list={global} />
        </div>
    )
}

export default Contact