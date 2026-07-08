import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="flex justify-between items-center p-3">
   <div className="p-3  ">
    <h1>logo</h1>
   </div>
    <div className="flex gap-5 ">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Help">Help</Link>
    </div>
    </div>

    </>  
     

  )
}

export default Navbar