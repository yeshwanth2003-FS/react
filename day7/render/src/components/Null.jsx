
const Null = () => {
   
    const profileImage = null
    const email = undefined

  return (
   <>
   {profileImage ?? <p>No Image Found</p>}
   
   {email?? <p>Email Not Available</p>}
   
   </>
    
  )
}

export default Null