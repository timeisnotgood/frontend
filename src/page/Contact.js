import React, { useContext, useState } from 'react'
import Addcontacts from './Addcontacts'
import Contatclist from './Contatclist'
import Editcontact from './Editcontact'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navlink from './Navlink'
import Register from './Register'

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
                <Route path='/register' element={<Register/>} />
                <Route path='/contactlist'  element={<Contatclist  />} />
                <Route path='/addcontacts' exact element={<Addcontacts getdata={getdata} />} />
                <Route path='/editcontact/:id' element={<Editcontact/>} />
            </Routes>
        </>
    )
}

export default Contact