import React, { useContext, useState } from 'react'
import Addcontacts from './Addcontacts'
import Contatclist from './Contatclist'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navlink from './Navlink'

const Contact = () => {

    const [global, setglobal] = useState([])
    const getdata = (contact)=>{
        setglobal([...global, contact])
    }
    return(
        <>
            <Navlink/>
            <Routes>
                <Route path='/' element={<Home global={global} />} />
                <Route path='/contactlist'  element={<Contatclist  />} />
                <Route path='/addcontacts' exact element={<Addcontacts getdata={getdata} />} />
            </Routes>
        </>
    )
}

export default Contact