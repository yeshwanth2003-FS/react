const Employee = (props) => {

    const {employee}=props

    


  return (

    <>
    <p>Name:{employee.Name}</p>

   <p>Email:{employee.Email}</p>

    <p>City:{employee.City}</p>

    <p>Experience:{employee.Experience}</p>
 
    
    </>
    
  )
}

export default Employee