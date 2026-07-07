

const Navbar = () => {
  return (<>
    <div className="bg-amber-400 p-5 flex justify-between items-center ">
        <h2 className="bg-amber-50 p-3 rounded-2xl w-20 text-center">logo</h2>
        <div className="flex gap-10 text-white font-semibold ">
        <Link/>
        </div>
    </div>
    
 </>
  )
}
export default Navbar

export const Link=()=>{
    return(
        <>
      
        <a href="">Home</a>
        <a href="">About us</a>
        <a href="">Help</a>
        <a href="">Contact</a>
      
        </>
    )
}
