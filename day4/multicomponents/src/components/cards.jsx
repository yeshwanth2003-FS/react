import product1 from "../assets/product1.webp"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.png"

const Cards = () => {
  return (
    <>
    <div className="p-10">
        <div className="flex justify-center items-center gap-5">
            <div className=" bg-amber-200 p-5" >
                <img src={product1} className="w-70 h-70" alt="" />
                <div className="flex flex-col gap-3 p-5 items-center" >
                <h1>Name:GrowMax</h1>
                 <h1>Price:2000</h1> 
                 <button>view product</button> 
                 </div>               
            </div>
             <div className=" bg-amber-200 p-5" >
                <img src={product2} className="w-70 h-70" alt="" />
                <div className="flex flex-col gap-3 p-5 items-center" >
                <h1>Name:GrowMax</h1>
                 <h1>Price:2000</h1> 
                 <button>view product</button> 
                 </div>               
            </div>
             <div className=" bg-amber-200 p-5" >
                <img src={product3} className="w-70 h-70" alt="" />
                <div className="flex flex-col gap-3 p-5 items-center" >
                <h1>Name:GrowMax</h1>
                 <h1>Price:2000</h1> 
                 <button>view product</button> 
                 </div>               
            </div>
             <div className=" bg-amber-200 p-5" >
                <img src={product4} className="w-70 h-70" alt="" />
                <div className="flex flex-col gap-3 p-5 items-center" >
                <h1>Name:GrowMax</h1>
                 <h1>Price:2000</h1> 
                 <button>view product</button> 
                 </div>               
            </div>
            
             
        </div>
    </div>
    </>
  )
}

export default Cards