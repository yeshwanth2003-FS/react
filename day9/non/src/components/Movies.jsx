const Movies = (list) => {

    const {movies}=list

    

    return (
    <div className="p-5 bg-gray-600 text-white" >

           {movies.map((e,i)=>(
                <div key={i+1} >
                    <p>{e}</p>
                </div>
           ))}

    </div>
  )
}

export default Movies