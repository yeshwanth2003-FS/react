import React, { useState } from 'react'

const App = () => {

  const event=()=>{
    alert("welcome to react")
  }
  const[isactive,setisactive]=useState(true)

  const number=()=>{

    setisactive(!isactive)
    
    
  }

  const [name,setname]=useState(yesh)

  const change=()=>{
    
    setname="yeshwanth"

  }

  return (
     <>
     <h1>hiii</h1>
      <button onClick={event}>click me</button> <br /><br />
      <h1 >{isactive?<p>logged in</p>:<p>logged out</p>}</h1>
       <button  onClick={number}>click me</button>
      
     </>
    
  )
}

export default App