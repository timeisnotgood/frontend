import React from 'react'

const Contatclist = ({list}) => {
  console.log(list);
  const names = list.map( name =>{
    return(
      <div key={name._id} >
        <p>{name.name}</p>
      </div>
    )
  } )
  return (
    <div>
      {names}
    </div>
  )
}

export default Contatclist