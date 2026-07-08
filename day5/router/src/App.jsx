import { Router, Routes } from "react-router-dom"


const App = () => {
  return (

     <Routes>
         <Route path="/" elements={Home} />
          <Route path="/About" elements={About} />
           <Route path="/Contact" elements={Contact} />
            <Route path="/Help" elements={Help} />
     </Routes>
  )
}

export default App