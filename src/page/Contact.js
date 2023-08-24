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
    
    return(
        <div>
        <Routes>
            <Route path='/addcontacts' exact element={<Addcontacts getdata={getdata} />} />
            <Route path='/contacts' exact element={<Contatclist list={global} />} />
        </Routes>
        </div>
    )
}

export default Contact