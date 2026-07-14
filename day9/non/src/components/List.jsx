const List = (details) => {
    const {List}=details
  return (
    <>
    <div className="p-5 bg-black text-white">
        {List.map((e,i)=>(
            <>
           <p key={i+1}>id={e.id}</p> 
           <p key={i+1}>name={e.name}</p>
           <p key={i+1}>course={e.course}</p>
           </>
        ))}
    </div>
    </>
  )
}

export default List