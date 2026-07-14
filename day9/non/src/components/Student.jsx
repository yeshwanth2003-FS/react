const Student = (props) => {


    const{details}=props
     

  return (
    <div className="p-5 bg-amber-300 ">
        <p>Name: {details.name}</p>
        <p>Age:  {details.age}</p>
        <p>Course: {details.Course}</p>
    </div>
  )
}

export default Student