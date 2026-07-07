import Link from "./link"


const Navbar = () => {
  return (<>
    <div className="bg-gradient-to-r from-purple-900 to-orange-500 p-5 flex justify-between items-center ">
        <h2 className="bg-amber-50 p-3 rounded-2xl w-20 text-center">logo</h2>
        <div className="flex gap-10 text-black font-semibold ">
         <Link></Link>
        </div>
    </div>
    
 </>
  )
}
export default Navbar


