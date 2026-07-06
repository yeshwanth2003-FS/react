import "./Gallery.css";

import product1 from "../../assets/product/product1..avif";
import product2 from "../../assets/product/product2.png";
import product3 from "../../assets/product/product3.jpg";
import product4 from "../../assets/product/product4.avif";

const Gallery = () => {
  return (
    <div className="gallery-container">

      <h1>task-4 Our Products</h1>

      <div className="gallery">

        <div className="card">
          <img src={product1} alt="Product 1" />
          <h3>Smart Watch</h3>
        </div>

        <div className="card">
          <img src={product2} alt="Product 2" />
          <h3>Laptop</h3>
        </div>

        <div className="card">
          <img src={product3} alt="Product 3" />
          <h3>Headphones</h3>
        </div>

        <div className="card">
          <img src={product4} alt="Product 4" />
          <h3>Mobile Phone</h3>
        </div>

      </div>

    </div>
  );
};

export default Gallery;