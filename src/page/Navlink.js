import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = () => {
  return (
    <div>
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
  )
}

export default Navlink