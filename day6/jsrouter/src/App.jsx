import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navabar from "./components/Navabar"
import Task from "./components/Task"
import Project from "./components/Project"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"




const App = () => {
  return (

    <> 
    <Navabar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Task" element={<Task/>}/>
          <Route path="/Project" element={<Project/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
              <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App