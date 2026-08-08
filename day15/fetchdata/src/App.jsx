import { useState, useEffect } from "react";

function App() {

  // ================= TASK 1 =================

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Latest Count:", count);
  }, [count]);


  // ================= TASK 2 =================

  const [name, setName] = useState("");

  useEffect(() => {
    document.title = name
      ? `Welcome ${name}`
      : "React App";
  }, [name]);


  // ================= TASK 3 =================

  const [timer, setTimer] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, []);


  // ================= TASK 4 =================

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    };

    fetchUsers();

  }, []);


  return (
    <div>

      <h1>React useEffect Tasks</h1>


      {/* ================= TASK 1 ================= */}

      <h2>Task 1 - Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>


      <hr />


      {/* ================= TASK 2 ================= */}

      <h2>Task 2 - Page Title Updater</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Welcome {name}</p>


      <hr />


      {/* ================= TASK 3 ================= */}

      <h2>Task 3 - Digital Timer</h2>

      <h3>{timer} seconds</h3>


      <hr />


      {/* ================= TASK 4 ================= */}

      <h2>Task 4 - Fetch API</h2>

      {users.map((user) => (
        <div key={user.id}>

          <p>Name: {user.name}</p>

          <p>Email: {user.email}</p>

          <hr />

        </div>
      ))}

    </div>
  );
}

export default App;