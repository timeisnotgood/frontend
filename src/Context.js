import React, { createContext, useContext, useState } from 'react'

const Context = () => {

    const Checkinterface = createContext(null)
    const Checkbox =({children}) =>{
        const [state, setstate] = useState(false)
        return(
            <Checkinterface.Provider value={{state, setstate}} >{children}</Checkinterface.Provider>
        )
    }

    const Input =()=>{

        const Context = useContext(Checkinterface)

        const {state, setstate} = Context

        return <input type={'checkbox'} onChange={(e)=>{
            setstate(e.target.value)
        }} checked={state} />
    }
    const Lable =({children})=>{

        const Context = useContext(Checkinterface)

        const {state, setstate} = Context
        return <lable onClick={()=> setstate( (state)=> !state )} >{children}</lable>
    }
  return (
    <div>
        <Checkbox>
            <Input/>
            <Lable>Click here</Lable>
        </Checkbox>
    </div>
  )
}

export default Context