import React from 'react'
import { Link } from 'react-router-dom'
import "./css/navlink.css"

const Navlink = () => {
  return (
    <div className='navbar' >
        <div className='nav' >
        <Link to='/' >
            Home
        </Link>
        <Link to='/addcontacts' >
            Addcontacts
        </Link>
        <Link to='/contactlist' >
            contactslist
        </Link>
        </div>
    </div>
  )
}

export default Navlink