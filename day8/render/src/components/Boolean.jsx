const Boolean = () => {
  
   const isLogin = true
  
  
    return (
   <>
   {isLogin?<p>Welcome User</p>:<p>Please Login</p>}
   </>
  )
}

export default Boolean