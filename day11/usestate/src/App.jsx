import { useState } from "react"

const App = () => {

 
  const [hero,sethero]=useState(["Vijay","Ajith","Suriya"])

   const change=()=>{

 
  const copy=[...hero]

  copy[1]="SK"

  sethero(copy)

    }



    const [fname,setfname]=useState(["Apple","Orange","Mango"])

   const onchange=()=>{

 
  const copy1=[...fname]

  copy1[1]="Banana"

  setfname(copy1)

   }

  const [course,setcourse]=useState(
    {
   name:"Sudhan",
   course:"JS"
})
const change3=()=>{
  const copy3={...course}
  copy3.course="react"
  setcourse(copy3)
}

 const [company,setcompany]=useState(
  
  {
   company:"Google",
   city:"Chennai"
})

const change4=()=>{
  const copy4={...company}
  copy4.company="Microsoft"
  setcompany(copy4)

}

  return (
    <>
    
    <div className="p-5 ">
      <h1 className="font-semibold">task1</h1>
    <button className="p-1 my-2 border" onClick={change}>click me</button>
    <div>
      {hero.map((e,i)=>(
        <p key={i+1}>{e}</p>
      ))}
    </div>


   
       <h1 className="font-semibold">task2</h1>
    <button className="p-1 my-2 border" onClick={onchange}>click me</button>
    <div>
      {fname.map((e,i)=>(
        <p key={i+1}>{e}</p>
      ))}
    </div>


    <h1 className="font-semibold">task3</h1>
    <button className="p-1 my-2 border" onClick={change3}>click me</button>
    <p>{course.name}</p> 
     <p>{course.course}</p>


        <h1 className="font-semibold">task4</h1>
    <button className="p-1 my-2 border" onClick={change4}>click me</button>
    <p>{company.company}</p> 
     <p>{company.city}</p> 

    




    </div>
    </>
    

  )
}

export default App