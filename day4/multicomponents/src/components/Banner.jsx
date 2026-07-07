
import hit from "../assets/banner.jpg"

const Banner = () => {
  return (
    <>
     <div className="relative">
        <img src={hit} className="w-dvw h-[590px]" alt="" />
        <h1 className="absolute top-[250px] left-[300px] w-[900px] text-white text-[80px] font-bold">Welcome to croptech</h1>
     </div>

     </>
  )
}

export default Banner