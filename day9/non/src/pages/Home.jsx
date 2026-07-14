import Product from "../components/Product"

const Home = () => {

  const arr=["Html","CSS","jsx","React","Node"]

  const arr_obj=[
    {
      name:"sudhan",
      age:25,
      course:"react"
    }, {
      name:"ajith",
      age:22,
      course:"Html"
    }, {
      name:"vijay",
      age:20,
      course:"Css"
    }
  ]

  return (

    <Product courses= {arr} details={arr_obj} />
    
  )
}

export default Home