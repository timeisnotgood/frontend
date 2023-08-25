import React, { useContext, useState } from 'react'
import Addcontacts from './Addcontacts'
import Contatclist from './Contatclist'
import Contactdetail from './Contactdetail'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const Contact = () => {

    const [global, setglobal] = useState([])
    const getdata = (contact)=>{
        setglobal([...global, contact])
    }
    console.log(global);
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home global={global} />} />
                <Route path='/contactlist'  element={<Contatclist list={global} />} />
                <Route path='/addcontacts' exact element={<Addcontacts getdata={getdata} />} />
            </Routes>
        </div>
    )
}

export default Contact