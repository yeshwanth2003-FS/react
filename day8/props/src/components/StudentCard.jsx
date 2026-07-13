const StudentCard = (props) => {

    
    
    const {dataname,dataage,dataCourse,dataisPlaced}=props


  return (
     <>
      <p>name:{dataname}</p>
       <p>age:{dataage}</p>
       <p>course:{dataCourse}</p>
       {dataisPlaced?<p>palced</p>:<p>not palced</p>}
       
       
       </>
  )
}

export default StudentCard