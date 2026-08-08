import { useState } from "react";

function App() {

  // TASK 1
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const submitName = () => {
    setDisplayName(name);
  };


  // TASK 2
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


  // TASK 3
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const submitEmployee = () => {
    setEmployee({
      name: employeeName,
      department: department,
      salary: salary
    });
  };


  // TASK 4
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: ""
  });

  const submitProduct = () => {
    setProduct({
      name: productName,
      price: price,
      category: category
    });
  };


  // TASK 5
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    city: "",
    age: ""
  });

  const submitProfile = () => {
    setProfile({
      name: userName,
      email: email,
      city: city,
      age: age
    });
  };


  return (
    <div>

      <h1>useState Input Tasks</h1>


      {/* ================= TASK 1 ================= */}

      <h2>Task 1 - Name Display</h2>

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

      <h2>Task 3 - Employee Details</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={employeeName}
        onChange={(e) => setEmployeeName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <br /><br />

      <button onClick={submitEmployee}>
        Submit
      </button>

      <h3>Employee Name: {employee.name}</h3>
      <h3>Department: {employee.department}</h3>
      <h3>Salary: {employee.salary}</h3>


      <hr />


      {/* ================= TASK 4 ================= */}

      <h2>Task 4 - Product Details</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br /><br />

      <button onClick={submitProduct}>
        Submit
      </button>


      {/* Product Card */}

      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          marginTop: "20px",
          width: "250px"
        }}
      >
        <h3>Product Card</h3>

        <p>Product: {product.name}</p>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>
      </div>


      <hr />


      {/* ================= TASK 5 ================= */}

      <h2>Task 5 - User Profile</h2>

      <input
        type="text"
        placeholder="Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <button onClick={submitProfile}>
        Submit
      </button>


      {/* Profile Card */}

      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          marginTop: "20px",
          width: "300px"
        }}
      >
        <h3>Profile Card</h3>

        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>City: {profile.city}</p>
        <p>Age: {profile.age}</p>
      </div>

    </div>
  );
}

export default App;