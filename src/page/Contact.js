import React, { useContext, useState } from 'react'
import Addcontacts from './Addcontacts'
import Contatclist from './Contatclist'
import Contactdetail from './Contactdetail'

const Contact = () => {

    const [global, setglobal] = useState([])
    const getdata = (contact)=>{
        setglobal([...global, contact])
    }
    return(
        <div>
            <Addcontacts getdata={getdata} />
            <Contatclist list={global} />
            <Contactdetail/>
        </div>
    )
}

export default Contact