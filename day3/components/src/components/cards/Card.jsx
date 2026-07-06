import "./Card.css"

const Cards=()=>{

    return (
        <>
        <br /><br />
  
    <h1>Task3-Movie cards</h1>
    <br /><br />
    
        <div className="cardsparent">
            <div className="cardschild1">
                <img src="./movie/leo.jpg" alt="" />
                <div>
                <h3>Movie name : leo</h3>
                <h3>movie hero : vijay </h3>
                <h3>Collection : ₹620 Cr</h3>
                </div>
            </div>
             <div className="cardschild1">
                <img src="./movie/jailer.jpg" alt="" />
                <div>
                <h3>Movie name : jailer</h3>
                <h3>movie hero : Rajinikanth </h3>
                <h3>Collection : ₹520 Cr</h3>
                </div>
            </div>
             <div className="cardschild1">
                <img src="./movie/rrr.jpg" alt="" />
                <div>
                <h3>Movie name : leo</h3>
                <h3>movie hero : NTR</h3>
                <h3>Collection : ₹1200 Cr</h3>
                </div>
            </div>
        </div>
        </>
    )

}
export default Cards