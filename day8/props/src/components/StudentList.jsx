const StudentList = (props) => {
 
    const  {list}=props
  



    return (
   

        <div>
            {list.map((e,i)=>(
             
                <p key={i+1}>{e.id}-{e.name}-{e.course}</p>      

            ))}
        </div>


  )
}

export default StudentList