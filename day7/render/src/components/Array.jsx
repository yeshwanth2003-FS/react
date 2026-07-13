const Array = () => {

   const arr=["Vijay","Ajith","Suriya","sk","Dhanush"]


  return (
    <>
    
    <div>{arr.map((e,i)=>(

        <p key={i+1}>{e}</p>      

    ))}</div>
    
    </>
      
  )
}

export default Array 