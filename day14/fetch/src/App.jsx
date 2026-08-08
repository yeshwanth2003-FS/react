import { useState } from "react";

function App() {

  // ================= TASK 1 =================

  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const submitName = () => {
    setDisplayName(name);
  };


  // ================= TASK 2 =================

  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");

  const [student, setStudent] = useState({
    name: "",
    course: ""
  });

  const submitStudent = () => {
    setStudent({
      name: studentName,
      course: course
    });
  };


  // ================= TASK 3 =================

  const [technology, setTechnology] = useState("");

  const [technologies, setTechnologies] = useState([
    "React",
    "JavaScript",
    "Node JS"
  ]);

  const addTechnology = () => {
    setTechnologies([
      ...technologies,
      technology
    ]);

    setTechnology("");
  };


  return (
    <div>

      <h1>React Form Handling</h1>


      {/* ================= TASK 1 ================= */}

      <h2>Task 1 - Name Submit</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={submitName}>
        Submit
      </button>

      <h3>{displayName}</h3>


      <hr />


      {/* ================= TASK 2 ================= */}

      <h2>Task 2 - Student Details</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br /><br />

      <button onClick={submitStudent}>
        Submit
      </button>

      <h3>Student Name: {student.name}</h3>
      <h3>Course: {student.course}</h3>


      <hr />


      {/* ================= TASK 3 ================= */}

      <h2>Task 3 - Add Technology</h2>

      <input
        type="text"
        placeholder="Enter Technology"
        value={technology}
        onChange={(e) => setTechnology(e.target.value)}
      />

      <button onClick={addTechnology}>
        Add
      </button>


      <h3>Technology List:</h3>

      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>
            {tech}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;