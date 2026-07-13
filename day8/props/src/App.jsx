
import Employee from './components/Employee'
import StudentCard from './components/StudentCard'
import StudentList from './components/StudentList'

const App = () => {
   
     const name="Sudhan"
     const age=25
     const Course="React"
     const isPlaced=true

     const obj={
               Name:"Rahul",
               Email :"rahul@gmail.com",
               City  :"Chennai",
               Experience : "3 Years"
            }

    const arrobj=[
        {
            id:1,
            name:"vijay",
            course:"html"

        },
         {
            id:2,
            name:"dk",
            course:"react"

        },
         {
            id:3,
            name:"sk",
            course:"node"

        },
         {
            id:4,
            name:"ajith",
            course:"js"

        },
         {
            id:1,
            name:"str",
            course:"css"

        }
    ]



  return (
   <>
    <StudentCard  dataname={name} dataage={age} dataCourse={Course} dataisPlaced={isPlaced} />
    <Employee employee={obj}  />
    <StudentList  list={arrobj}      />
    </>
  )
}

export default App