import "./Profile.css"
import profileImage from "../../assets/profile/emptyprofile.avif";

const Profile =()=>{

    return(
        <>
       <div className="parent">
        <div className="parent2">
            <div className="child1">
                 <img src={profileImage} alt="Profile" />
            </div>

            <div className="child2">
                <h4>Name : YESHWANTH</h4>
                     <h4>Role : FULLSTACK </h4>
            </div> 
           </div>
         </div>
        </>
    )
}

export default Profile