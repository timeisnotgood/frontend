import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = () => {

    const [todo, settodo] = useState('')
    const [data, setdata] = useState(getdata())

    const handler = (e) => settodo(e.target.value)
    const subhandler = (e) =>{
        e.preventDefault()
        setdata([...data, todo])
        settodo("")
    }

    const localkey = "Todos"

    function getdata(){
        const db = localStorage.getItem("Todos")

        if(db){
            return JSON.parse(localStorage.getItem("Todos"))
        }else{
            return []
        }
    }
    useEffect(()=>{
         localStorage.setItem(localkey, JSON.stringify(data))
    }, [data])


    const list = data.map((per,index) => (
        <p key={index} >{per}
            <button onClick={()=>{
                data.filter( index =>
                    per !== data
                 )
            }} >🚽</button>        
        </p>
    ))

    return(
        <div>
            <form onSubmit={subhandler} >
                <input type='text' placeholder='Enter Todos' name='todo' value={todo} onChange={handler} />
                <button>Submit</button>
            </form>
            <div>
                {list}
            </div>
        </div>
    )
}

export default Context