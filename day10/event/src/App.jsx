import React, { useState } from 'react'

const App = () => {

const[count,setcount]=useState(0)

  const number=()=>{
    setcount(count+1)
  }
 
    const [name,setname]=useState("")

  const change=()=>{
    
    setname("yeshwanth")

  }



  const[isactive,setisactive]=useState(false)

  const loggin=()=>{

    setisactive(!isactive)
    
    
  }
   
    const [course,setcourse]=useState("JavaScript")

  const update=()=>{
    
    setcourse("React JS")

  }



  return (
     <>
    
    <button onClick={number}>clickme</button>
     <p>{count}</p>     
     <button onClick={change}>clickme</button>
     <h1>{name}</h1>
     <h1 >{isactive?<p>Welcome User</p>:<p>Please Login</p>}</h1>
     <button  onClick={loggin}>login</button> <br /><br />

      <button onClick={update}>update course</button>
     <h1>{course}</h1>
     </>
    
  )
}

export default App