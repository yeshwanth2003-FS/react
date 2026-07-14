import Employee from "./components/Employee"
import List from "./components/List"
import Movies from "./components/Movies"
import Product from "./components/Product "
import Student from "./components/Student"

const Home = () => {

   const obj={
    name:"yeshwanth",
    age:"22",
    Course:"frontend"
   }

   const em={
    name:"yeshwanth",
    Email:"yeshwanthyeshwanth2003@gmail.com",
    Department:"IT",
   }

   const pro={
        Name:"laptop",
        Price:100000,
        Stock_Status:"availabel"

   }

const mov=["Leo","Billa","Anjan"]

const list=[
    {id:1,
     name:"ajith",
     course:"js"
    },
     {id:2,
     name:"vijay",
     course:"html"
    },
     {id:3,
     name:"dk",
     course:"react"
    }
]


  return (
   <>
   <Student details={obj}/>
   <Employee employee={em}/>
   <Product product={pro}/>
   <Movies  movies={mov}/>
   <List  List={list}/>
   </>

  )
}

export default Home