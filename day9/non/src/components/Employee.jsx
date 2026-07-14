const Employee=(props)=>{

    const {employee}=props
   
    

    return(
        <>
           
           <div className="p-5 bg-blue-500">
            <p>Name:{employee.name}</p>
             <p>Email:{employee.Email}</p>
              <p>Department:{employee.Department}</p>
           </div>
      
        </>
    )

}
export default Employee