import { Link } from "react-router-dom"


const Navabar = () => {
  return (
    
    <>
    <div>
        <div>
            <h1>logo</h1>
        </div>
        <div>
            <Link to="/">Home</Link>
             <Link to="/Task">Task</Link>
              <Link to="/Project">Project</Link>
               <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Contact">Contact</Link>

       </div>
    </div>
    </>
  )
}

export default Navabar