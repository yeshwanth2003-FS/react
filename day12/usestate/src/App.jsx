import { useState } from "react";

function App() {

  // TASK 1
  const [student, setStudent] = useState({
    name: "Sudhan",
    course: "React"
  });

  const updateCourse = () => {
    setStudent({
      ...student,
      course: "MERN"
    });
  };


  // TASK 2
  const [product, setProduct] = useState({
    name: "Mobile",
    price: 20000
  });

  const changePrice = () => {
    setProduct({
      ...product,
      price: 25000
    });
  };


  // TASK 3
  const [actors, setActors] = useState([
    "Vijay",
    "Ajith",
    "Suriya"
  ]);

  const changeAjith = () => {
    setActors(
      actors.map((actor) =>
        actor === "Ajith" ? "SK" : actor
      )
    );
  };


  // TASK 4
  const [numbers, setNumbers] = useState([
    10,
    20,
    30,
    40
  ]);

  const changeNumber = () => {
    setNumbers(
      numbers.map((num) =>
        num === 30 ? 100 : num
      )
    );
  };


  // TASK 5
  const [fruits, setFruits] = useState([
    "Apple",
    "Orange"
  ]);

  const addMango = () => {
    setFruits([
      ...fruits,
      "Mango"
    ]);
  };


  // TASK 6
  const [fruitList, setFruitList] = useState([
    "Apple",
    "Orange",
    "Mango"
  ]);

  const removeOrange = () => {
    setFruitList(
      fruitList.filter(
        (fruit) => fruit !== "Orange"
      )
    );
  };


  // TASK 7
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Sudhan"
    },
    {
      id: 2,
      name: "Rahul"
    }
  ]);

  const updateStudent = () => {
    setStudents(
      students.map((student) =>
        student.id === 1
          ? {
              ...student,
              name: "Karthik"
            }
          : student
      )
    );
  };


  return (
    <div>

      <h1>useState Mixed Tasks</h1>

      {/* TASK 1 */}
      <h2>Task 1</h2>

      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>

      <button onClick={updateCourse}>
        Change React to MERN
      </button>


      {/* TASK 2 */}
      <h2>Task 2</h2>

      <p>Product: {product.name}</p>
      <p>Price: ₹{product.price}</p>

      <button onClick={changePrice}>
        Change Price to 25000
      </button>


      {/* TASK 3 */}
      <h2>Task 3</h2>

      {actors.map((actor) => (
        <p key={actor}>{actor}</p>
      ))}

      <button onClick={changeAjith}>
        Change Ajith to SK
      </button>


      {/* TASK 4 */}
      <h2>Task 4</h2>

      {numbers.map((num) => (
        <p key={num}>{num}</p>
      ))}

      <button onClick={changeNumber}>
        Change 30 to 100
      </button>


      {/* TASK 5 */}
      <h2>Task 5</h2>

      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}

      <button onClick={addMango}>
        Add Mango
      </button>


      {/* TASK 6 */}
      <h2>Task 6</h2>

      {fruitList.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}

      <button onClick={removeOrange}>
        Remove Orange
      </button>


      {/* TASK 7 */}
      <h2>Task 7</h2>

      {students.map((student) => (
        <p key={student.id}>
          {student.id} - {student.name}
        </p>
      ))}

      <button onClick={updateStudent}>
        Change Sudhan to Karthik
      </button>

    </div>
  );
}

export default App;