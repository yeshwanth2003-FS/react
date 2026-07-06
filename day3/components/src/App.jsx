import Banner from "./components/banner/Banner"
import Cards from "./components/cards/Card"
import ProductGallery from "./components/gallery/Gallery"
import Profile from "./components/profile/Profile"

const App =()=>{
  return(
    <>
       
     <Profile/>
     <Banner/>
     <Cards/>
     <ProductGallery></ProductGallery>
       
    </>
  )
}

export default App